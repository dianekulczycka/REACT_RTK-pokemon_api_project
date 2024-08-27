import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

interface IProps {
    name: string,
    id: number
}

const SearchResultPokemon: FC<IProps> = ({id, name}) => {
    return <NavLink className="m-1 link-danger" to={`/pokemons/${id}`}>{name}</NavLink>
};

export default SearchResultPokemon;