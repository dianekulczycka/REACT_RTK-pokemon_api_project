import axios, {AxiosResponse} from "axios";
import {ITypesResponse} from "../interfaces/ITypesResponse";

export const getType = async (type: string): Promise<ITypesResponse> => {
    try {
        const response: AxiosResponse<ITypesResponse> = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get ability");
        throw error;
    }
};