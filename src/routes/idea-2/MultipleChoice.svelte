<script lang="ts">
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

	interface Props {
		onStepComplete: () => void;
		associatedBackgroundImage?: string;
	}

	const { onStepComplete, associatedBackgroundImage }: Props = $props();
</script>

{#snippet button(answerNumber: number)}
	<Card>
		<button class="h-full w-full" onclick={onStepComplete}>Answer {answerNumber}</button>
	</Card>
{/snippet}

<Screen backgroundImage={associatedBackgroundImage}>
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<Title>Multiple Choice Step</Title>
		</Card>

		<div class="mt-4 flex flex-col gap-4">
			{@render button(1)}
			{@render button(2)}
			{@render button(3)}
			{@render button(4)}
		</div>
	</div>
</Screen>
