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

<Screen snapEnabled backgroundImage={associatedBackgroundImage}>
	<div class="w-full text-center">
		<Card class="mx-auto w-fit">
			<Title>True False Step</Title>
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
</Screen>
