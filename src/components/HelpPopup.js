import React from "react";

function HelpPopup({ onClose, preloadedImages }) {
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
                        <svg width="16" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0312 3.07812L10.1094 8L15.0312 12.9688C15.6406 13.5312 15.6406 14.5156 15.0312 15.0781C14.4688 15.6875 13.4844 15.6875 12.9219 15.0781L8 10.1562L3.03125 15.0781C2.46875 15.6875 1.48438 15.6875 0.921875 15.0781C0.3125 14.5156 0.3125 13.5312 0.921875 12.9688L5.84375 8L0.921875 3.07812C0.3125 2.51562 0.3125 1.53125 0.921875 0.96875C1.48438 0.359375 2.46875 0.359375 3.03125 0.96875L8 5.89062L12.9219 0.96875C13.4844 0.359375 14.4688 0.359375 15.0312 0.96875C15.6406 1.53125 15.6406 2.51562 15.0312 3.07812Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpPopup;
