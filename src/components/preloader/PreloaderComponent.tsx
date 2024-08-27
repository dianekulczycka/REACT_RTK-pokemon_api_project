import React, {FC} from 'react';

const PreloaderComponent: FC = () => {
    return (
        <div>
            <h1> Loading... </h1>
            <img
                src="../preloader/preloader.gif"
                alt="preloader"
                className="w-100-px"
            />
        </div>

    );
};

export default PreloaderComponent;