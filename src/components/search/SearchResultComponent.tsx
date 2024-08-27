import React, {FC} from 'react';
import {IPokemon} from '../../interfaces/IPokemon';
import SearchResultPokemon from "./SearchResultPokemon";

interface IProps {
    searchResults: IPokemon[];
}

const SearchResultComponent: FC<IProps> = ({searchResults}) => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column m-2">
            <h2>results:</h2>
            {
                searchResults.length > 0 ?
                    (
                        searchResults.map(({id, name}) => <SearchResultPokemon key={id} id={id} name={name}/>)
                    )
                    :
                    <p className="d-flex justify-content-center align-items-center">no results :(</p>
            }
        </div>
    );
};

export default SearchResultComponent;