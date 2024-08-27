import React from 'react';
import {useAppDispatch} from "../../store/helpers/useAppDispatch";
import {revokeFavourites} from "../../store/slices/favouritesSlice";

const RevokeAllFavouritesBtn = () => {
    const dispatch = useAppDispatch();
    return (
        <button
            className="btn btn-danger m-2"
            onClick={() => {
                dispatch(revokeFavourites())
            }}>
            Revoke all favourites
        </button>
    );
};

export default RevokeAllFavouritesBtn;