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

	// TODO: Can do a better job scoping this in real implementation
	type StepComponent =
		| Component<{ onStepComplete: () => void; tooManyOptions?: boolean }>
		| Component;

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

	const goToNextStep = () => {
		currentStep += 1;
	};

	const goToStartStep = () => {
		currentStep = 0;
	};
</script>

<div class="flex max-h-screen min-h-screen w-full flex-col gap-8 overflow-hidden">
	{#key currentStep}
		<div
			in:fly={{ y: '100%', easing: cubicOut, delay: 500 }}
			out:fly={{ y: '-100%', easing: expoIn }}
			class="min-h-screen overflow-y-auto"
		>
			{#each currentStepGroup.steps as StepComponent}
				<StepComponent onStepComplete={StepComponent === Summary ? goToStartStep : goToNextStep} />
			{/each}

			{#if !currentStepGroup.interactive}
				<Navigation type="Bottom" onStepComplete={goToNextStep} />
			{/if}
		</div>
	{/key}
</div>
