import React, {FC} from 'react';
import ReactPaginate from 'react-paginate';
import {pokemonActions} from '../../store/slices/pokemonSlice';
import {useAppDispatch} from "../../store/helpers/useAppDispatch";
import {useAppSelector} from "../../store/helpers/useAppSelector";

interface IProps {
    length: number;
}

const PaginationComponent: FC<IProps> = ({length}) => {
    const dispatch = useAppDispatch();
    const {page, itemsPerPage} = useAppSelector(state => state.pokemons);

    const handlePageChange = (selectedPage: { selected: number }) => {
        dispatch(pokemonActions.setPage(selectedPage.selected + 1));
    };

    return (
        <div className="p-lg-4">
            <ReactPaginate
                pageCount={Math.ceil(length / itemsPerPage)}
                pageRangeDisplayed={1}
                marginPagesDisplayed={0}
                onPageChange={handlePageChange}
                forcePage={page - 1}
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link text-danger"
                previousClassName="page-item"
                previousLinkClassName="page-link text-danger"
                nextClassName="page-item"
                nextLinkClassName="page-link text-danger"
                breakClassName="page-item"
                breakLinkClassName="page-link text-danger"
            />
        </div>
    );
};

export default PaginationComponent;
