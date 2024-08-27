import {IAbility} from "./IAbility";
import {IType} from "./IType";
import {IForm} from "./IForm";
import {IStat} from "./IStat";

export interface IPokemonDetails {
    name: string;
    abilities: IAbility[];
    types: IType[];
    stats: IStat[];
    forms: IForm[];
    sprites: {
        front_shiny: string;
    }
}