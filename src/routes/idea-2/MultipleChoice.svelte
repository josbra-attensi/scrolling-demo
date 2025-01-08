<script lang="ts">
	import Card from './Card.svelte';

	interface Props {
		onStepComplete: () => void;
	}

	const { onStepComplete }: Props = $props();
</script>

<div class="flex min-h-screen flex-col justify-center">
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<h2 class="text-3xl">Multiple Choice Step</h2>
		</Card>

		<div class="mt-4 flex flex-col gap-4">
			<Card><button class="h-full w-full" onclick={onStepComplete}>Answer 1</button></Card>

			<Card><button onclick={onStepComplete}>Answer 2</button></Card>

			<Card><button onclick={onStepComplete}>Answer 3</button></Card>

			<Card><button onclick={onStepComplete}>Answer 4</button></Card>
		</div>
	</div>
</div>
