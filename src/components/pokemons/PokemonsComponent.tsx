import React, {FC} from 'react';
import PokemonComponent from "./PokemonComponent";
import {IPokemon} from "../../interfaces/IPokemon";

interface IProps {
    pokemons: IPokemon[]
}

const PokemonsComponent: FC<IProps> = ({pokemons}) => {
    return (
        <div className="grid-4cols w-75">
            {
                pokemons.map((pokemon, index) => <PokemonComponent key={index} pokemon={pokemon}/>)
            }
        </div>
    );
};

export default PokemonsComponent;