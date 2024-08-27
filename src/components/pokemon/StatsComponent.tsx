import React, {FC} from 'react';
import {IStat} from "../../interfaces/IStat";

interface IProps {
    stats: IStat[]
}

const StatsComponent:FC<IProps> = ({stats}) => {
    return (
        <div className="d-flex align-items-center flex-column">
            <h2 className="text-danger m-2"> Stats </h2>
            {
                stats.map((value, index) => <h4 key={index}> {value.stat.name}: {value.base_stat} </h4>)
            }
        </div>
    );
};

export default StatsComponent;