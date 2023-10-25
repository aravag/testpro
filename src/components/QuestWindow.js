import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import Scene from './Scene';
import Characters from './Characters';
import RotateScreen from './RotateScreen';
import HelpPopup from './HelpPopup';
import StartScene from './StartScene';
import { preloadImages, imagePathsToPreload } from './ImagePreloader';

function QuestWindow({ onClose }) {
    const [isPreloading, setIsPreloading] = useState(true);
    const [isHelpPopupOpen, setIsHelpPopupOpen] = useState(false);
    const [isCharacterSelected, setIsCharacterSelected] = useState(false);
    const [isStartSceneClosed, setStartSceneClosed] = useState(false);
    const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
    const [preloadedImages, setPreloadedImages] = useState({});

    useEffect(() => {
        preloadImages(imagePathsToPreload, (images) => {
            setPreloadedImages(images);
            setTimeout(() => {
                setIsPreloading(false);
            }, 3000);
        });
    }, []);

    const closeHelpPopup = () => {
        setIsHelpPopupOpen(false);
    };

    const openHelpPopup = () => {
        setIsHelpPopupOpen(true);
    };

    const onCharacterSelect = (index) => {
        setIsCharacterSelected(true);
        setSelectedCharacterIndex(index);
    };

    const closeStartScene = () => {
        setStartSceneClosed(true);
    };

    return (
        <div className="questWindow">
            <div className="questControls">
                <div className="helpQuest" onClick={openHelpPopup}>
                    <div className="helpInner">
                        <img src="/images/help.svg" alt="help" />
                    </div>
                </div>
                <div className="closeQuest">
                    <div className="closeInner" onClick={onClose}>
                        <img src="/images/close.svg" alt="close" />
                    </div>
                </div>
            </div>
            {isHelpPopupOpen && <HelpPopup onClose={closeHelpPopup} />}
            {isPreloading ? (
                <Preloader />
            ) : (
                isStartSceneClosed ? (
                    isCharacterSelected ? (
                        <Scene selectedCharacterIndex={selectedCharacterIndex} preloadedImages={preloadedImages} />
                    ) : (
                        <Characters onSelectCharacter={onCharacterSelect} />
                    )
                ) : (
                    <StartScene onClick={closeStartScene} />
                )
            )}

            <RotateScreen />
        </div>
    );
}

export default QuestWindow;
