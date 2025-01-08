<script>
	import Card from './Card.svelte';
</script>

<div class="flex min-h-screen flex-col justify-center">
	<Card>
		<h2 class="mb-6 text-3xl">Rich Text Step</h2>

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
</div>
