import axios, {AxiosResponse} from "axios";
import {IPokemonDetails} from "../interfaces/IPokemonDetails";

export const getPokemonById = async (pokemonId: number): Promise<IPokemonDetails> => {
    try {
        const response: AxiosResponse<IPokemonDetails> = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get slected pokemon");
        throw error;
    }
};
