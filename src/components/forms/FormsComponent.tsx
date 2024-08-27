import React, {FC} from 'react';
import {IForm} from "../../interfaces/IForm";
import {NavLink} from "react-router-dom";

interface IProps {
    forms: IForm[];
    id: number
}

const FormsComponent: FC<IProps> = ({forms, id}) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="text-danger m-2"> Forms </h2>
            {
                forms.map((value, index) => {
                    return (
                        <NavLink className="btn btn-danger" key={index} to={`/forms/${id}`}> see form: {value.name} </NavLink>
                    )
                })
            }
        </div>
    );
};

export default FormsComponent;