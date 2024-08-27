import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import SearchDropdownComponent from "./SearchDropdownComponent/SearchDropdownComponent";

const HeaderComponent: FC = () => {
    return (
        <ul className="container d-flex align-items-center m-auto mb-3 w-50 bg-warning list-unstyled">
            <li>
                <NavLink className="m-sm-2 btn btn-danger" to="pokemons">All pokemons</NavLink>
            </li>
            <li>
                <NavLink className="m-sm-2 btn btn-danger" to="favourites">Favourite pokemons</NavLink>
            </li>
            <li>
                <SearchDropdownComponent/>
            </li>
        </ul>
    );
};

export default HeaderComponent;