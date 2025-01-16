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
		<Title bottomMargin>Paragraph Step</Title>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis animi ab
			perspiciatis, asperiores totam error, blanditiis cumque, rem minus sunt reiciendis vitae.
			Deleniti delectus inventore dolorem officia aliquid.
		</p>
	</Card>
</Screen>
