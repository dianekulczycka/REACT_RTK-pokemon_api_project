import {IAbility} from "../interfaces/IAbility";
import axios, {AxiosResponse} from "axios";

export const getAbility = async (ability: string): Promise<IAbility> => {
    try {
        const response: AxiosResponse<IAbility> = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get ability");
        throw error;
    }
};