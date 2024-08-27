import React, {FC, useState} from 'react';

interface IProps {
    search_option: string;
    onSearch: (query: string) => void;
}

const SearchFormComponent: FC<IProps> = ({search_option, onSearch}) => {
    const [query, setQuery] = useState<string>("");

    const handleSearch = (): void => {
        onSearch(query);
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <input
                className="m-2"
                type="text"
                value={query}
                onChange={(ev) => setQuery(ev.target.value)}
                placeholder={search_option}
            />
            <button
                onClick={handleSearch}
                className="btn btn-danger m-2">
                search
            </button>
        </div>
    );
};

export default SearchFormComponent;