import React, {FC} from 'react';
import {addFavourite} from "../../store/slices/favouritesSlice";
import {useAppDispatch} from "../../store/helpers/useAppDispatch";
import {useAppSelector} from "../../store/helpers/useAppSelector";
import {IFavourite} from "../../interfaces/IFavourite";

interface IProps {
    name: string;
    id: number;
}

const AddPokemonToFavouritesButton: FC<IProps> = ({name, id}) => {

    let {favourites} = useAppSelector(state => state.favourites);
    const dispatch = useAppDispatch();

    const favPokemon: IFavourite = {name, id}
    const isFavourite = (pokemon: IFavourite) =>
        favourites.some(fav => fav.id === pokemon.id);

    return (
        <div className="d-flex flex-column align-items-center">
            <button disabled={isFavourite(favPokemon)}
                    className="btn btn-danger"
                    onClick={() => dispatch(addFavourite(favPokemon))}
            >
                add {name} to favourites
            </button>
            {isFavourite(favPokemon) && <p className="text-danger"> Added! </p>}
        </div>

    );
};

export default AddPokemonToFavouritesButton;