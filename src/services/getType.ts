import axios, {AxiosResponse} from "axios";
import {IType} from "../interfaces/IType";

export const getType = async (type: string): Promise<IType> => {
    try {
        const response: AxiosResponse<IType> = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get ability");
        throw error;
    }
};