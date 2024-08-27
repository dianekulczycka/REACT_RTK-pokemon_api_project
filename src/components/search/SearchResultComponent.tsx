import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import {IPokemon} from '../../interfaces/IPokemon';

interface IProps {
    searchResults: IPokemon[];
}

const SearchResultComponent: FC<IProps> = ({searchResults}) => {
    return (
        <div>
            <h2 className="m-2">results:</h2>
            {
                searchResults.length > 0 ?
                    (
                        searchResults.map(pokemon => (
                                <div key={pokemon.id}
                                     className="d-flex justify-content-center align-items-center flex-column m-2">
                                    <NavLink
                                        className="link-danger"
                                        to={`/pokemons/${pokemon.id}`}>
                                        {pokemon.name}
                                    </NavLink>
                                </div>
                            )
                        )
                    )
                    :
                    <p className="d-flex justify-content-center align-items-center">no results :(</p>
            }
        </div>
    );
};

export default SearchResultComponent;