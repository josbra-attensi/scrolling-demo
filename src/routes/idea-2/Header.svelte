<script lang="ts">
	interface Props {
		currentStep: number;
		totalSteps: number;
		correctPercentage: number;
	}

	let { currentStep, totalSteps, correctPercentage }: Props = $props();
</script>

<div id="header" class="fast-header w-full py-2">
	<div class="ml-auto flex w-fit gap-2 rounded-l-full bg-white py-2 pl-6 pr-4">
		<div>
			<div class="font-bold">{currentStep}/{totalSteps}</div>
			<div class="text-xs text-slate-500">Steps</div>
		</div>
		<div class="w-[2px] bg-gradient-to-b from-slate-100 to-slate-300"></div>
		<div>
			<div class="font-bold">{correctPercentage}%</div>
			<div class="text-xs text-slate-500">Correct</div>
		</div>
	</div>
</div>

<style>
	.fast-header {
		grid-row: 1;
	}
</style>
