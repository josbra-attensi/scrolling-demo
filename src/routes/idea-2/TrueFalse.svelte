<script lang="ts">
	import Card from './Card.svelte';

	interface Props {
		onStepComplete: () => void;
	}

	const { onStepComplete }: Props = $props();
</script>

<div class="flex min-h-screen flex-col justify-center py-8">
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<h2 class="text-3xl">True False Step</h2>
		</Card>

		<div class="mt-4 w-full">
			<img
				class="mx-auto"
				src="https://picsum.photos/400/300"
				alt="Random placeholder from Picsum"
			/>
		</div>

		<div class="mx-auto mt-4 flex w-fit gap-4">
			<Card class="w-20"><button onclick={onStepComplete}>False</button></Card>
			<Card class="w-20"><button onclick={onStepComplete}>True</button></Card>
		</div>
	</div>
</div>
