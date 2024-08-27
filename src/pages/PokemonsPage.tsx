import React, {FC, useEffect} from 'react';
import {useAppDispatch} from "../store/helpers/useAppDispatch";
import {useAppSelector} from "../store/helpers/useAppSelector";
import {pokemonActions} from "../store/slices/pokemonSlice";
import PreloaderComponent from "../components/preloader/PreloaderComponent";
import PokemonsComponent from "../components/pokemons/PokemonsComponent";
import PaginationComponent from "../components/pagination/PaginationComponent";
import {IPokemon} from "../interfaces/IPokemon";

const PokemonsPage: FC = () => {
    const dispatch = useAppDispatch();
    const {pokemonsPaginated, isLoaded, page, itemsPerPage} = useAppSelector(state => state.pokemons);

    const startIndex: number = (page - 1) * itemsPerPage;
    const endIndex: number = startIndex + itemsPerPage;
    const paginatedPokemons: IPokemon[] = pokemonsPaginated.slice(startIndex, endIndex);

    useEffect(() => {
        dispatch(pokemonActions.loadAllPokemons());
    }, [dispatch]);

    return (
        <div>
            {
                isLoaded ?
                    <div className="container d-flex flex-column align-items-center justify-content-evenly">
                        <PokemonsComponent pokemons={paginatedPokemons}/>
                        <PaginationComponent length={pokemonsPaginated.length}/>
                    </div>
                    :
                    <PreloaderComponent/>
            }
        </div>
    );
};

export default PokemonsPage;
