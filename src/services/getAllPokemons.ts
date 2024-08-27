import axios, {AxiosResponse} from "axios";
import {IPokemon} from "../interfaces/IPokemon";

interface IPokemonsPaginated {
    results: IPokemon[];
}

export const getAllPokemons = async (): Promise<IPokemon[]> => {
    try {
        let {data: {results}}: AxiosResponse<IPokemonsPaginated> = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1302");
        results = results.map((pokemon, index) => ({
            id: index + 1,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        return results;
    } catch (error) {
        console.error("Failed to get pokemons");
        throw error;
    }
};

