<script lang="ts">
	import Navigation from './Navigation.svelte';

	interface Props {
		currentStep: number;
		totalSteps: number;
		correctPercentage: number;
		onStepComplete: () => void;
	}

	let { currentStep, totalSteps, correctPercentage, onStepComplete }: Props = $props();
</script>

<div id="header" class="fast-header grid w-full py-2">
	<div class="ml-6 flex self-center">
		<Navigation type="Top" {onStepComplete} />
	</div>
	<div class="flex justify-end">
		<div class="flex w-fit gap-2 rounded-l-full bg-white py-2 pl-6 pr-4">
			<div>
				<div class="font-bold">{currentStep}/{totalSteps}</div>
				<div
					class="text-xs text-slate-500 a11y-zoom-level-2:text-[10px] a11y-zoom-level-1:text-[12px]"
				>
					Steps
				</div>
			</div>
			<div class="w-[2px] bg-gradient-to-b from-slate-100 to-slate-300"></div>
			<div>
				<div class="font-bold">{correctPercentage}%</div>
				<div
					class="text-xs text-slate-500 a11y-zoom-level-2:text-[10px] a11y-zoom-level-1:text-[12px]"
				>
					Correct
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.fast-header {
		grid-row: 1;
		grid-template-columns: 2fr 1fr;
	}
</style>
