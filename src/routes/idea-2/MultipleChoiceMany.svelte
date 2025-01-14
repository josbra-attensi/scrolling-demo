<script lang="ts">
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

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

<Screen>
	<div class="max-h-full w-full pt-4 text-center">
		<Card class="mx-auto w-fit">
			<Title>Many Multiple Choice Step</Title>
		</Card>

		<div class="mt-4 flex flex-col gap-4 overflow-y-auto pb-4">
			{@render button(1)}
			{@render button(2)}
			{@render button(3)}
			{@render button(4)}
			{@render button(5)}
			{@render button(6)}
			{@render button(7)}
			{@render button(8)}
		</div>
	</div>
</Screen>
