<script lang="ts">
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

	interface Props {
		associatedBackgroundImage?: string;
	}

	let { associatedBackgroundImage }: Props = $props();
</script>

<Screen snapEnabled backgroundImage={associatedBackgroundImage}>
	<Card>
		<Title bottomMargin>Information Step</Title>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam debitis asperiores pariatur
			adipisci nisi praesentium iusto doloribus. At id sequi reprehenderit molestias consequatur
			harum sed perferendis laboriosam, porro, magni provident.
		</p>
	</Card>
</Screen>
