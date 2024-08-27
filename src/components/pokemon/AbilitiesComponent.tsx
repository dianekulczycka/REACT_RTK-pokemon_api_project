import React, {FC} from 'react';
import {IAbility} from "../../interfaces/IAbility";

interface IProps {
    abilities: IAbility[];
}

const AbilitiesComponent: FC<IProps> = ({abilities}) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="text-danger m-2">Abilities</h2>
            {
                abilities.map((value, index) => <h4 key={index}>{value.ability.name}</h4>)
            }
        </div>
    );
};

export default AbilitiesComponent;