import axios, {AxiosResponse} from "axios";
import {IAbilitiesResponse} from "../interfaces/IAbilitiesResponse";

export const getAbility = async (ability: string): Promise<IAbilitiesResponse> => {
    try {
        const response: AxiosResponse<IAbilitiesResponse> = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get ability");
        throw error;
    }
};