<script lang="ts">
	import type { Component } from 'svelte';

	import Info from './Info.svelte';
	import MultipleChoice from './MultipleChoice.svelte';
	import Paragraph from './Paragraph.svelte';
	import RichText from './RichText.svelte';
	import Intro from './Intro.svelte';
	import TrueFalse from './TrueFalse.svelte';
	import Summary from './Summary.svelte';
	import Navigation from './Navigation.svelte';

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
		{ steps: [RichText], interactive: false },
		{ steps: [TrueFalse], interactive: true },
		{ steps: [Summary], interactive: true }
	];

	let currentStep = $state(0);
	let currentStepGroup = $derived(stepGroups[currentStep]);

	const goToNextStep = () => {
		currentStep += 1;
	};
</script>

<div class="mx-auto flex w-[clamp(16rem,90vw,70rem)] flex-col gap-8 px-6">
	{#each currentStepGroup.steps as StepComponent}
		<StepComponent onStepComplete={goToNextStep} />
	{/each}
	{#if !currentStepGroup.interactive}
		<Navigation type="Bottom" onStepComplete={goToNextStep} />
	{/if}
</div>
