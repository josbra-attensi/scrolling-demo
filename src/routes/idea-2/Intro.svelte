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

<Screen backgroundImage={associatedBackgroundImage}>
	<Card>
		<Title bottomMargin>Introduction</Title>

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
</Screen>
