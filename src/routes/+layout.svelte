<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-dvh w-full bg-gradient-to-t from-indigo-400 to-indigo-200 bg-fixed">
	{@render children()}
</div>
