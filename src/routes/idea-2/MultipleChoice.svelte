<script lang="ts">
	import Card from './Card.svelte';

	interface Props {
		onStepComplete: () => void;
	}

	const { onStepComplete }: Props = $props();
</script>

{#snippet button(answerNumber: number)}
	<Card>
		<button class="h-full w-full" onclick={onStepComplete}>Answer {answerNumber}</button>
	</Card>
{/snippet}

<div class="justify-center-safe mx-auto flex min-h-full w-[clamp(16rem,90vw,70rem)] flex-col py-8">
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<h2 class="text-3xl">Multiple Choice Step</h2>
		</Card>

		<div class="mt-4 flex flex-col gap-4">
			{@render button(1)}
			{@render button(2)}
			{@render button(3)}
			{@render button(4)}
		</div>
	</div>
</div>
