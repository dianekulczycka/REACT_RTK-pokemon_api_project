import React, {useEffect} from 'react';
import {useAppDispatch} from "../../store/helpers/useAppDispatch";
import {useAppSelector} from "../../store/helpers/useAppSelector";
import {formActions} from "../../store/slices/formSlice";
import {useParams} from "react-router-dom";

const SelectedFormComponent = () => {
    const {id = ""} = useParams<{ id: string }>();
    let dispatch = useAppDispatch();
    let {form} = useAppSelector(state => state.forms);

    useEffect(() => {
        dispatch(formActions.loadForm(+id));
    }, [dispatch, id]);

    return (
        <div className="container d-flex flex-column w-25 align-items-center border border-danger-subtle border-2 p-4">
            <img className="w-100-px" src={form?.image} alt={form?.name}/>
            <h2> form: {form?.name} </h2>
            <h4
                className={form?.is_default ? "text-warning" : "text-danger"}>
                Is default? - {form?.is_default.toString()}
            </h4>
            <h4
                className={form?.is_mega ? "text-warning" : "text-danger"}>
                Is mega? - {form?.is_mega.toString()}
            </h4>
            <h4 className={form?.is_battle_only ? "text-warning" : "text-danger"}>
                Is battle only? - {form?.is_battle_only.toString()}
            </h4>
        </div>
    );
};

export default SelectedFormComponent;