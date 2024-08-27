import React, {FC} from 'react';
import {IType} from "../../interfaces/IType";

interface IProps {
    types: IType[]
}

const TypesComponent: FC<IProps> = ({types}) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="text-danger m-2"> Types </h2>
            {
                types.map((value, index) => <h4 key={index}> {value.type.name} </h4>)
            }
        </div>
    );
};

export default TypesComponent;