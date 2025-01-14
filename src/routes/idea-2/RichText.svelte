<script>
	import Card from './Card.svelte';
	import Screen from './Screen.svelte';
	import Title from './Title.svelte';
</script>

<Screen snapEnabled>
	<Card>
		<Title bottomMargin>Rich Text Step</Title>

		<p>
			Lorem <strong>ipsum</strong> dolor sit
			<span class="text-xl font-black">amet consectetur adipisicing</span>
			elit. Odit obcaecati nobis animi ab perspiciatis, asperiores
			<span class="text-red-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>

		<p>
			Lorem <strong>ipsum</strong> dolor sit amet consectetur adipisicing elit. Odit obcaecati nobis
			animi ab perspiciatis, asperiores
			<span class="text-green-500">totam error</span>, blanditiis cumque, <i>rem minus sunt</i> reiciendis
			vitae 🥳. Deleniti delectus inventore dolorem officia aliquid.
		</p>
	</Card>
</Screen>
