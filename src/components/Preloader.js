import React from "react";

function Preloader() {
    return (
        <div className="preloader">
            <div className="progressBar">
                <div className="progress"></div>
            </div>
            <div className="progressText">
                <span>Отрисовываем сцены</span>
                <span>Творим магию</span>
            </div>
        </div>
    );
}

export default Preloader;