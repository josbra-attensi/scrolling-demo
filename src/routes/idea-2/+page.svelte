<script lang="ts">
	import { type Component } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut, expoIn } from 'svelte/easing';

	import Info from './Info.svelte';
	import MultipleChoice from './MultipleChoice.svelte';
	import MultipleChoiceMany from './MultipleChoiceMany.svelte';
	import Paragraph from './Paragraph.svelte';
	import RichText from './RichText.svelte';
	import RichTextLong from './RichTextLong.svelte';
	import Intro from './Intro.svelte';
	import TrueFalse from './TrueFalse.svelte';
	import Summary from './Summary.svelte';
	import Navigation from './Navigation.svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	// TODO: Can do a better job scoping this in real implementation
	type StepComponent = Component<{ onStepComplete: () => void }> | Component;

	type StepGroup = {
		interactive: boolean;
		steps: StepComponent[];
		numberOfSelections?: number;
		mobileBackgroundImage?: string;
		desktopBackgroundImage?: string;
	};

	let stepGroups: StepGroup[] = [
		{ steps: [Intro], interactive: true },
		{
			steps: [RichText, Info, Paragraph],
			interactive: false,
			mobileBackgroundImage: '/mobile-image-1.jpg'
		},
		{
			steps: [MultipleChoice],
			interactive: true,
			numberOfSelections: 3,
			mobileBackgroundImage: 'mobile-image-2.jpg'
		},
		{ steps: [RichTextLong, RichText], interactive: false },
		{ steps: [TrueFalse], interactive: true, numberOfSelections: 1 },
		{ steps: [MultipleChoiceMany], interactive: true, numberOfSelections: 2 },
		{ steps: [Summary], interactive: true }
	];

	let currentStep = $state(0);
	let currentStepGroup = $derived(stepGroups[currentStep]);
	let correctPercentage = $derived(Math.round((currentStep / stepGroups.length) * 100));
	let showBackButton = $derived(currentStep > 0);

	const goToPreviousStep = () => {
		if (currentStep === 0) return;
		currentStep -= 1;
	};

	const goToNextStep = () => {
		if (currentStep === stepGroups.length) return;
		currentStep += 1;
	};

	const goToStartStep = () => {
		currentStep = 0;
	};
</script>

<div
	class="grid-layout transition-background-image max-h-dvh min-h-dvh w-full from-indigo-400 to-indigo-200 bg-fixed"
	class:bg-gradient-to-t={!currentStepGroup?.mobileBackgroundImage}
	style:background-image={currentStepGroup?.mobileBackgroundImage
		? `url(${currentStepGroup?.mobileBackgroundImage})`
		: undefined}
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
			in:fly={{ y: '100%', easing: cubicOut, delay: 500 }}
			out:fly={{ y: '-100%', easing: expoIn }}
			class="fast-content w-[100vw] snap-y snap-mandatory overflow-y-auto"
		>
			{#each currentStepGroup.steps as StepComponent}
				<StepComponent onStepComplete={StepComponent === Summary ? goToStartStep : goToNextStep} />
			{/each}

			{#if !currentStepGroup.interactive}
				<Navigation type="Bottom" onStepComplete={goToNextStep} />
			{/if}
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
