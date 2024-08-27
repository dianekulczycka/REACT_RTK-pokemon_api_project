import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

interface IProps {
    id: number,
    name: string
}

const FavouritePokemonComponent: FC<IProps> = ({id, name}) => {
    return <NavLink className="text-danger" to={`/pokemons/${id}`}> {name} </NavLink>
};

export default FavouritePokemonComponent;