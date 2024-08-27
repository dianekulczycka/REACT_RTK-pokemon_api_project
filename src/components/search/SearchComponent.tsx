import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../store/helpers/useAppDispatch';
import {getAbility} from '../../services/getAbility';
import {getType} from '../../services/getType';
import {pokemonActions} from '../../store/slices/pokemonSlice';
import {IPokemon} from '../../interfaces/IPokemon';
import {useAppSelector} from "../../store/helpers/useAppSelector";
import SearchFormComponent from './SearchFormComponent';
import SearchResultComponent from './SearchResultComponent';
import {IAbility} from "../../interfaces/IAbility";


const SearchComponent: React.FC = () => {
    const {search_option = ""} = useParams<{ search_option: string }>();
    const dispatch = useAppDispatch();
    const {pokemonsPaginated} = useAppSelector(state => state.pokemons);
    const {searchResults} = useAppSelector(state => state.pokemons);

    useEffect(() => {
        if (search_option === "name" && pokemonsPaginated.length === 0) {
            dispatch(pokemonActions.loadAllPokemons());
        }
    }, [dispatch, pokemonsPaginated.length, search_option]);

    const getSearchResults = async (searchQuery: string) => {
        try {
            let results: IPokemon[] = [];
            switch (search_option) {
                case "ability":
                    const abilityResult: IAbility = await getAbility(searchQuery);
                    results = abilityResult.ability.map(( ability ) => {
                        console.log(ability);
                        const id = ability.pokemon.url.split('/')[6];
                        return { id: +id, name: ability.name };
                    });
                    break;
                case "type":
                    const typeResult = await getType(searchQuery);
                    results = typeResult.pokemon.map(pokemon => {
                        const id = pokemon.pokemon.url.split('/')[6];
                        return {id: +id, name: pokemon.pokemon.name};
                    });
                    break;
                default:
                    console.error("No such search option!");
                    return;
            }
            dispatch(pokemonActions.setSearchResults(results));
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    const handleSearch = (query: string) => {
        switch (search_option) {
            case "name":
                const clearQuery = query.trim().toLowerCase();
                const filteredPokemons = pokemonsPaginated.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(clearQuery)
                );
                dispatch(pokemonActions.setSearchResults(filteredPokemons));
                break;
            case "ability":
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