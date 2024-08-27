import React, {FC} from 'react';
import {IForm} from "../../interfaces/IForm";
import FormComponent from "./FormComponent";

interface IProps {
    forms: IForm[];
    id: number
}

const FormsComponent: FC<IProps> = ({forms, id}) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="text-danger m-2"> Forms </h2>
            {
                forms.map((form, index) => <FormComponent key={index} id={id} form={form}/>)
            }
        </div>
    );
};

export default FormsComponent;