<script lang="ts">
    let { data } = $props();
    const setInfo = $derived(data.theSet);
    const cards = $derived(data.cardsInfo);

    console.log(setInfo);
</script>

<h1>{setInfo.name}</h1>

<div class="row justify-content-center" style="width: 100%; gap:10px">

    {#each cards as card (card.id)}
        <div class="col-4" style="max-width:30%;">
                <img src={card.imageUrl} alt={card.name} style="width:100%; background-color: darkgrey;">
        </div>
    {/each}

</div>