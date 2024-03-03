import React from "react";
import { ColorRing } from "react-loader-spinner";
import '../App.css';

const Loader = () => {
    return (
        <div className="loader-container">
            <ColorRing
                visible={true}
                height={80}
                width={80}
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#000']}
            />
        </div>
    );
};

export default Loader;
