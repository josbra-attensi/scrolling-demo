<script lang="ts">
	import Card from './Card.svelte';

	interface Props {
		onStepComplete: () => void;
	}

	const { onStepComplete }: Props = $props();
</script>

<div class="flex min-h-screen flex-col justify-center py-8">
	<Card>
		<h2 class="mb-6 text-3xl">Introduction</h2>

		<p class="mb-6">
			This demo works by grouping together non-interactive sequential steps, and using interactive
			steps as transition points.
		</p>
		<p class="mb-6">
			The demo lets you navigate forwards, backwards navigation is to be discussed due to some
			limitations if we place the button at the top. This should be explored separately.
		</p>

		<button
			class="cursor-pointer rounded-xl border border-blue-700 bg-blue-600 px-2 py-1.5 text-white"
			onclick={onStepComplete}>Start!</button
		>
	</Card>
</div>
