import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../store/helpers/useAppDispatch';
import {getAbility} from '../../services/getAbility';
import {getType} from '../../services/getType';
import {pokemonActions} from '../../store/slices/pokemonSlice';
import {IPokemon} from '../../interfaces/IPokemon';
import {useAppSelector} from "../../store/helpers/useAppSelector";
import SearchFormComponent from './SearchFormComponent';
import SearchResultComponent from './SearchResultComponent';
import {ITypesResponse} from "../../interfaces/ITypesResponse";
import {IAbilitiesResponse} from "../../interfaces/IAbilitiesResponse";


const SearchComponent: FC = () => {
    const {search_option = ""} = useParams<{ search_option: string }>();
    const dispatch = useAppDispatch();
    const {pokemonsPaginated} = useAppSelector(state => state.pokemons);
    const {searchResults} = useAppSelector(state => state.pokemons);

    useEffect((): void => {
        if (search_option === "name" && pokemonsPaginated.length === 0) {
            dispatch(pokemonActions.loadAllPokemons());
        }
    }, [dispatch, pokemonsPaginated.length, search_option]);

    const getSearchResults = async (searchQuery: string): Promise<void> => {
        try {
            let results: IPokemon[] = [];
            switch (search_option) {
                case "ability":
                    const abilityResult: IAbilitiesResponse = await getAbility(searchQuery);
                    console.log(abilityResult);
                    results = abilityResult.pokemon.map(result => {
                        const urlParts: string[] = result.pokemon.url.split('/');
                        const id: number = +urlParts[urlParts.length - 2];
                        return {id: +id, name: result.pokemon.name};
                    });
                    break;
                case "type":
                    const typeResult: ITypesResponse = await getType(searchQuery);
                    results = typeResult.pokemon.map(result => {
                        const urlParts: string[] = result.pokemon.url.split('/');
                        const id: number = +urlParts[urlParts.length - 2];
                        return {id, name: result.pokemon.name};
                    });
                    break;
                default:
                    console.error("No such search option!");
            }
            dispatch(pokemonActions.setSearchResults(results));
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    const handleSearch = (query: string): void => {
        switch (search_option) {
            case "name":
                const clearQuery: string = query.trim().toLowerCase();
                const filteredPokemons: IPokemon[] = pokemonsPaginated.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(clearQuery)
                );
                dispatch(pokemonActions.setSearchResults(filteredPokemons));
                break;
            case "ability":
                if (query) {
                    getSearchResults(query);
                } else {
                    dispatch(pokemonActions.clearSearchResults());
                }
                break;
            case "type":
                if (query) {
                    getSearchResults(query);
                } else {
                    dispatch(pokemonActions.clearSearchResults());
                }
                break;
            default:
                console.error("No such search option!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <SearchFormComponent search_option={search_option} onSearch={handleSearch}/>
            <SearchResultComponent searchResults={searchResults}/>
        </div>
    );
};

export default SearchComponent;