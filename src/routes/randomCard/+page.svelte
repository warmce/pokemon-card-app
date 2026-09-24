<svelte:head>
	<title>Random Card</title>
	<meta name="description" content="How to play Sverdle" />
</svelte:head>

<div class="text-column">
	<h1>Random card</h1>

    
    <img src={cardUrl} alt="random pokemon card" height="350px;" width="250px;">

    <br>

    <button onclick={newCard}>New card</button>

</div>

<script>
    import TCGdex from "@tcgdex/sdk";

    // Instantiate the SDK with your preferred language
    const tcgdex = new TCGdex('en');

    const pokeballPng = "https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png";
    let cardUrl = $state(pokeballPng);
  

    (async () => {
        cardUrl = await getCard();


    })();

    // Use in an async context
    async function getCard() {

        // Get a random card
        

        while (true) {
            const randomEndpoint = `${tcgdex.getEndpoint()}/${tcgdex.getLang()}/random/card`;
            tcgdex.getCache().delete(randomEndpoint); 
            // tcgdex only updates cached card every hour, 
            // so delete current one to get a new one
            const randomCard = await tcgdex.random.card();

            if (!randomCard.image) {
                console.log("evil evil evil evil evil evil evil evil evil evil evil: ", randomCard.name);
                cardUrl = pokeballPng;
                continue;
            }

            // try to get high quality image first
            const pngUrl = randomCard.getImageURL('high', 'png');
            console.log("random card: ", randomCard.name);
            if (pngUrl) {
                console.log("yay high quality png");
                return pngUrl;
            }
            // get low quality if necessary
            const tempUrl = randomCard.getImageURL('low', 'webp');
            return tempUrl;
        }
    }

    async function newCard() {
        cardUrl = await getCard();
    }

</script>

<style>
    button {
        width:90%;
        margin:auto;
        margin-top: 0;

        background-color: var(--color-theme-2);
        border: none;
		padding: 8px;
		height:100%;
		width: fit-content;

        color: white;
    }
    button:hover {
        background-color: #4d5e6f;
    }
    img {
        object-fit: contain;
    }
</style>
