<script>
	import Card from './Card.svelte';
</script>

<div
	class="mx-auto flex min-h-screen w-[clamp(16rem,90vw,70rem)] snap-start flex-col justify-center py-8"
>
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
