import React from "react";

function HelpPopup({ onClose }) {
    const handleCloseClick = () => {
        onClose();
    };

    return (
        <div className="helpPopupOverlay" onClick={handleCloseClick}>
            <div className="helpPopup" onClick={(e) => e.stopPropagation()}>
                <div className="helpPopContent">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate vel totam sint
                    repudiandae iure, blanditiis provident a voluptate nostrum optio dolores in eius non delectus
                    debitis deleniti explicabo nobis quibusdam quaerat, vero corporis perspiciatis id omnis?
                    Necessitatibus repellat iste suscipit quisquam, iure fugit consequatur dolorem? Maxime dolore quod
                    iste commodi distinctio velit fugiat, provident consequatur tempore, consectetur nostrum repellendus
                    quaerat possimus quis temporibus dolores quos labore unde neque minus debitis! Ipsa, dolorum
                    provident. Consequatur, reiciendis voluptatibus fuga quibusdam dolorem saepe aliquid praesentium
                    aliquam iste amet molestias voluptate nulla esse repudiandae aspernatur fugit cupiditate quas.
                    Itaque pariatur quam iste perspiciatis?
                </div>
                <div className="closeHelp" onClick={handleCloseClick}>
                    <div className="closeHelpInner">
                        <img src="/images/close.svg" alt="close" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpPopup;
