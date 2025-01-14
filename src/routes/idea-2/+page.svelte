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
	};

	let stepGroups: StepGroup[] = [
		{ steps: [Intro], interactive: true },
		{ steps: [RichText, Info, Paragraph], interactive: false },
		{ steps: [MultipleChoice], interactive: true },
		{ steps: [RichTextLong, RichText], interactive: false },
		{ steps: [TrueFalse], interactive: true },
		{ steps: [MultipleChoiceMany], interactive: true },
		{ steps: [Summary], interactive: true }
	];

	let currentStep = $state(0);
	let currentStepGroup = $derived(stepGroups[currentStep]);
	let correctPercentage = $derived(Math.round((currentStep / stepGroups.length) * 100));

	const goToNextStep = () => {
		currentStep += 1;
	};

	const goToStartStep = () => {
		currentStep = 0;
	};
</script>

<div
	class="grid-layout max-h-dvh min-h-dvh w-full bg-gradient-to-t from-indigo-400 to-indigo-200 bg-fixed"
>
	<Header {currentStep} totalSteps={stepGroups.length} {correctPercentage} />
	{#key currentStep}
		<div
			in:fly={{ y: '100%', easing: cubicOut, delay: 500 }}
			out:fly={{ y: '-100%', easing: expoIn }}
			class="fast-content flex w-[100vw] snap-y snap-mandatory flex-col overflow-y-auto"
		>
			{#each currentStepGroup.steps as StepComponent}
				<StepComponent onStepComplete={StepComponent === Summary ? goToStartStep : goToNextStep} />
			{/each}

			{#if !currentStepGroup.interactive}
				<Navigation type="Bottom" onStepComplete={goToNextStep} />
			{/if}
		</div>
	{/key}
	<Footer />
</div>

<style>
	.grid-layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100dvh;
	}

	.fast-content {
		grid-row: 2;
	}
</style>
