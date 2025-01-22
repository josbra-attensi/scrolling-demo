<script lang="ts">
	import { onDestroy, onMount, type Component } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut, expoIn } from 'svelte/easing';
	import { dev } from '$app/environment';

	import Info from './Info.svelte';
	import MultipleChoice from './MultipleChoice.svelte';
	import MultipleChoiceMany from './MultipleChoiceMany.svelte';
	import Paragraph from './Paragraph.svelte';
	import RichText from './RichText.svelte';
	import RichTextLong from './RichTextLong.svelte';
	import Intro from './Intro.svelte';
	import TrueFalse from './TrueFalse.svelte';
	import Summary from './Summary.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { backgroundState, createStepObserverManager, setBackgroundImage } from '$lib';

	// TODO: Can do a better job scoping this in real implementation
	type StepComponentData = {
		backgroundImage?: string;
		component:
			| Component<{ associatedBackgroundImage?: string; onStepComplete: () => void }>
			| Component;
	};

	type StepGroup = {
		steps: StepComponentData[];
		numberOfSelections?: number;
	};

	let stepGroups: StepGroup[] = [
		{ steps: [{ component: Intro }] },
		{
			steps: [
				{ component: RichText, backgroundImage: '/mobile-image-1.jpg' },
				{ component: Info, backgroundImage: '/mobile-image-2.jpg' },
				{ component: Paragraph, backgroundImage: '/mobile-image-1.jpg' },
				{
					component: MultipleChoice,
					backgroundImage: '/mobile-image-2.jpg'
				}
			],
			numberOfSelections: 3
		},
		{
			steps: [
				{ component: RichTextLong, backgroundImage: '/mobile-image-1.jpg' },
				{ component: RichText },
				{ component: TrueFalse, backgroundImage: '/mobile-image-2.jpg' }
			],
			numberOfSelections: 1
		},
		{ steps: [{ component: MultipleChoiceMany }], numberOfSelections: 2 },
		{ steps: [{ component: Summary }] }
	];

	function preloadImages() {
		let preloadImageUrls = stepGroups.flatMap((group) =>
			group.steps
				.map((stepData) => stepData.backgroundImage)
				.filter((stepData) => typeof stepData === 'string')
		);

		preloadImageUrls.forEach((url) => {
			const img = new Image();
			img.src = url;
		});
	}

	const GAME_AREA_ID = 'gameArea';

	let scrollableArea: HTMLDivElement | undefined = $state();

	let observationContainer: HTMLDivElement;
	let backgroundObserver: MutationObserver;
	let currentBackgroundImage = $derived(backgroundState.currentBackgroundImage);

	let stepState = $state({
		previousStep: -1,
		currentStep: 0
	});
	let currentStep = $derived(stepState.currentStep);
	let previousStep = $derived(stepState.previousStep);
	let currentStepGroup = $derived(stepGroups[currentStep]);
	let correctPercentage = $derived(Math.round((currentStep / stepGroups.length) * 100));
	let showBackButton = $derived(currentStep > 0);
	let wasBackwardsNavigation = $derived(previousStep > currentStep);

	$inspect(`Previous step: ${previousStep}`);
	$inspect(`Current step: ${currentStep}`);
	$inspect(`wasBackwardsNavigation: ${wasBackwardsNavigation}`);

	onMount(() => {
		if (dev) {
			$inspect(backgroundState);
		}

		preloadImages();

		backgroundObserver = createStepObserverManager(
			setBackgroundImage,
			observationContainer,
			GAME_AREA_ID
		);
	});

	onDestroy(() => {
		backgroundObserver?.disconnect();
	});

	const goToPreviousStep = () => {
		if (currentStep === 0) return;
		stepState = {
			previousStep: currentStep,
			currentStep: currentStep - 1
		};
	};

	const goToNextStep = () => {
		if (currentStep === stepGroups.length) return;
		stepState = {
			previousStep: currentStep,
			currentStep: currentStep + 1
		};
	};

	const goToStartStep = () => {
		stepState = {
			previousStep: -1,
			currentStep: 0
		};
	};

	const scrollToBottom = () => {
		if (!scrollableArea) return;
		scrollableArea.scrollTop = scrollableArea.scrollHeight;
	};
</script>

<div
	class="grid-layout transition-background-image max-h-dvh min-h-dvh w-full from-indigo-400 to-indigo-200 bg-fixed"
	class:bg-gradient-to-t={!currentBackgroundImage}
	style:background-image={currentBackgroundImage ? `url(${currentBackgroundImage})` : undefined}
	bind:this={observationContainer}
>
	<Header
		{currentStep}
		totalSteps={stepGroups.length}
		{correctPercentage}
		{showBackButton}
		onStepComplete={goToPreviousStep}
	/>
	{#key currentStep}
		<div
			id={GAME_AREA_ID}
			bind:this={scrollableArea}
			in:fly={{ y: wasBackwardsNavigation ? '-100%' : '100%', easing: cubicOut, delay: 500 }}
			out:fly={{ y: wasBackwardsNavigation ? '100%' : '-100%', easing: expoIn }}
			class="fast-content w-[100vw] snap-y snap-proximity overflow-y-auto md:snap-none"
			onoutroend={() => {
				if (wasBackwardsNavigation) {
					scrollToBottom();
				}
			}}
		>
			{#each currentStepGroup.steps as { component: StepComponent, backgroundImage }}
				<StepComponent
					onStepComplete={StepComponent === Summary ? goToStartStep : goToNextStep}
					associatedBackgroundImage={backgroundImage}
				/>
			{/each}

			<!-- TODO: See if not having the bottom button to navigate is liked, if so this can be removed and interactive flag can be removed -->
			<!-- {#if !currentStepGroup.interactive} -->
			<!-- 	<Navigation type="Bottom" onStepComplete={goToNextStep} /> -->
			<!-- {/if} -->
		</div>
	{/key}
	<Footer numberOfSelections={currentStepGroup?.numberOfSelections} />
</div>

<style>
	.grid-layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100dvh;
	}

	.transition-background-image {
		transition: background-image 0.5s;
		transition-behavior: allow-discrete;
	}

	.fast-content {
		grid-row: 2;
	}
</style>
