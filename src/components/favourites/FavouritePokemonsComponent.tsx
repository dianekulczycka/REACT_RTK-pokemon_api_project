import React, {FC} from 'react';
import {useAppSelector} from "../../store/helpers/useAppSelector";
import RevokeAllFavouritesBtn from "../buttons/RevokeAllFavouritesBtn";
import FavouritePokemonComponent from "./FavouritePokemonComponent";

const FavouritePokemonsComponent: FC = () => {
    let {favourites} = useAppSelector(state => state.favourites);

    return (
        <div className="container d-flex flex-column w-25 align-items-center">
            <RevokeAllFavouritesBtn/>
            <h2 className="text-danger"> Favourites: </h2>
            {
                favourites.map(({id, name}) => <FavouritePokemonComponent key={id} name={name} id={id}/>)
            }
        </div>
    );
};

export default FavouritePokemonsComponent;