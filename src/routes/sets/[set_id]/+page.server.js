import TCGdex from "@tcgdex/sdk";
import { error } from '@sveltejs/kit'

const pokeballPng = "https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png";

// Instantiate the SDK with your preferred language
const tcgdex = new TCGdex('en');

/** @param {unknown} value */
const toSerializable = (value) =>
    JSON.parse(JSON.stringify(value, (key, nestedValue) =>
        key === 'sdk' ? undefined : nestedValue
    ));

/** @param {{ params: { set_id: string } }} event */
export async function load({ params }) {
    const theSet = await tcgdex.set.get(params.set_id);

    if (!theSet) error(404);

    const cardsInSet = theSet.cards;

    const cardsInfo = (cardsInSet ?? []).map((card) => ({
        id: card.id,
        name: card.name,
        imageUrl: card.image
            ? card.getImageURL('high', 'png') || card.getImageURL('low', 'webp') || pokeballPng
            : pokeballPng
    }));

    return {
        theSet: toSerializable(theSet),
        cardsInfo
    };
}