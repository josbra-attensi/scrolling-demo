<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLBaseAttributes, HTMLButtonAttributes } from 'svelte/elements';

	interface Props {
		children?: Snippet<[]>;
		onclick: HTMLButtonAttributes['onclick'];
		class?: HTMLBaseAttributes['class'];
	}

	const { children, onclick, class: classNames }: Props = $props();
</script>

<button
	{onclick}
	class="rounded-md border border-gray-700 {classNames} bg-white p-5 transition-transform active:scale-95"
>
	{@render children?.()}
</button>
