import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;