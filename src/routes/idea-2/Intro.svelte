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
		<Title bottomMargin>The Universe</Title>

		<p class="mb-6">A Fast about the universe. No more, no less.</p>

		<button
			class="cursor-pointer rounded-xl border border-blue-700 bg-blue-600 px-2 py-1.5 text-white"
			onclick={onStepComplete}>Start!</button
		>
	</Card>
</Screen>
