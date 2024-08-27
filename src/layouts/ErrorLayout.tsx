import React, {FC} from 'react';
import HeaderComponent from "../components/header/HeaderComponent";
import ErrorPage from "../pages/ErrorPage";

const ErrorLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <ErrorPage/>
        </div>
    );
};

export default ErrorLayout;