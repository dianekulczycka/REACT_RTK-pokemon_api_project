import React, {useEffect} from 'react';
import SelectedPokemonComponent from "../components/pokemons/SelectedPokemonComponent";
import {useParams} from "react-router-dom";
import PreloaderComponent from "../components/preloader/PreloaderComponent";
import {useAppDispatch} from "../store/helpers/useAppDispatch";
import {useAppSelector} from "../store/helpers/useAppSelector";
import {pokemonActions} from "../store/slices/pokemonSlice";

const SelectedPokemonPage = () => {
    const {id = ""} = useParams<{ id: string }>();
    let dispatch = useAppDispatch();
    let {selectedPokemon, isLoaded} = useAppSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(pokemonActions.loadPokemonDetails(+id));
    }, [dispatch, id]);

    return (
        <div>
            {
                isLoaded ?
                    <SelectedPokemonComponent selectedPokemon={selectedPokemon} id={+id}/>
                    :
                    <PreloaderComponent/>
            }

        </div>
    );
};

export default SelectedPokemonPage;