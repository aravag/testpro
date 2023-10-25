import React from "react";

function Preloader({ progress }) {
    
    let progressText = "Отрисовываем сцены";

    if (progress >= 25) {
        progressText = "Собираем мир из пикселей";
    }
    
    if (progress >= 50) {
        progressText = "Драконы и гномы в сборе";
    }
    
    if (progress >= 75) {
        progressText = "Складываем пиксели в историю";
    }

    return (
        <div className="preloader">
            <div className="progressBar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progressText">
                <div>{progressText}</div>
            </div>
        </div>
    );
}


export default Preloader;