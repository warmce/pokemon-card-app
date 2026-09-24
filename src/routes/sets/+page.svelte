<svelte:head>
	<title>Card Sets</title>
	<meta name="description" content="List of all card sets" />
</svelte:head>

<section>
	<p>List of all the card sets</p>

    <div class="row" style="width:100%;">
        {#each setList as set (set.id)}
            {#if set.cardCount.official > 1}
                <div class="col-4" style="padding: 8px; min-width:100px;">
                    <a href={`/sets/${set.id}`}>
                        {set.name}
                    </a>
                </div>
            {/if}
        {/each}
    </div>

</section>

<script lang="ts">
    import TCGdex from "@tcgdex/sdk";
	import { onMount } from "svelte";

    // Instantiate the SDK with your preferred language
    const tcgdex = new TCGdex('en');

    type SetList = Awaited<ReturnType<typeof tcgdex.set.list>>;
    let setList: SetList = $state([]);

    onMount(async () => {
        setList = await tcgdex.set.list();
    });




</script>