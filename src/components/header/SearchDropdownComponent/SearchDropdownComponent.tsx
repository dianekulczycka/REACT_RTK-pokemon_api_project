import React, {FC} from 'react';
import {Dropdown} from 'react-bootstrap';

const SearchDropdownComponent: FC = () => {
    return (
        <Dropdown className="m-sm-2">
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Search
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/search/name">By name</Dropdown.Item>
                <Dropdown.Item href="/search/ability">By ability</Dropdown.Item>
                <Dropdown.Item href="/search/type">By type</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SearchDropdownComponent;