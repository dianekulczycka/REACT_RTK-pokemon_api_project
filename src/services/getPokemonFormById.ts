import axios, {AxiosResponse} from "axios";
import {IForm} from "../interfaces/IForm";

export const getPokemonFormById = async (formId: number): Promise<IForm> => {
    try {
        const response: AxiosResponse<IForm> = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${formId}/`);
        const responseData = response.data;
        return {
            ...responseData,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${formId}.png`
        };
    } catch (error) {
        console.error("Failed to get pokemon's form");
        throw error;
    }
};