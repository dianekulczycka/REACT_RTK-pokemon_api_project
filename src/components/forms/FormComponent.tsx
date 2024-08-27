import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {IForm} from "../../interfaces/IForm";

interface IProps {
    id: number,
    form: IForm
}

const FormComponent: FC<IProps> = ({id, form}) => {
    return <NavLink className="btn btn-danger" to={`/forms/${id}`}> see form: {form.name} </NavLink>
};

export default FormComponent;