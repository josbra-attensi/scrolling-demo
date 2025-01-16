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
		<Title bottomMargin>Summary</Title>

		<p class="mb-6">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis animi ab
			perspiciatis, asperiores totam error, blanditiis cumque, rem minus sunt reiciendis vitae.
			Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<button
			class="cursor-pointer rounded-xl border border-blue-700 bg-blue-600 px-2 py-1.5 text-white"
			onclick={onStepComplete}>Play again!</button
		>
	</Card>
</Screen>
