<script lang="ts">
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';

	interface Props {
		associatedBackgroundImage?: string;
		text?: string;
	}

	let { associatedBackgroundImage, text }: Props = $props();
</script>

<Screen snapEnabled backgroundImage={associatedBackgroundImage}>
	<Card>
		<p class="rounded-xl bg-white p-4">{text ?? 'Fallback text'}.</p>
	</Card>
</Screen>
