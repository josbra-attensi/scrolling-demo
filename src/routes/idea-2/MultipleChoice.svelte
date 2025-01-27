<script lang="ts">
	import Button from './Button.svelte';
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

	interface Props {
		onStepComplete: () => void;
		associatedBackgroundImage?: string;
	}

	const { onStepComplete, associatedBackgroundImage }: Props = $props();
</script>

{#snippet button(answer: string)}
	<Button class="h-full w-full" onclick={onStepComplete}>{answer}</Button>
{/snippet}

<Screen snapEnabled backgroundImage={associatedBackgroundImage}>
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<Title>Multiple Choice Step</Title>
		</Card>

		<div class="mt-4 flex flex-col gap-4">
			{@render button('10 Billion')}
			{@render button('1000 Billion')}
			{@render button('100-200 Billion')}
		</div>
	</div>
</Screen>
