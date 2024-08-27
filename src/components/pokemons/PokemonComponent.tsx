import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {IPokemon} from "../../interfaces/IPokemon";

interface IProps {
    pokemon: IPokemon;
}

const PokemonComponent: FC<IProps> = ({pokemon: {id, name, image}}) => {
    return (
        <NavLink className="container d-flex flex-column align-items-center btn btn-warning text-danger"
                 to={`/pokemons/${id}`}>
            <img className="w-100-px" src={image} alt={name}/>
            <p> {name} </p>
        </NavLink>
    )
};

export default PokemonComponent;