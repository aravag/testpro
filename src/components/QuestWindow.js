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
                        <svg width="14" height="16" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.25 6.5C3.25 7.34375 2.54688 8 1.75 8C0.90625 8 0.25 7.34375 0.25 6.5C0.25 3.21875 2.92188 0.5 6.25 0.5H7.75C11.0312 0.5 13.75 3.21875 13.75 6.5V6.6875C13.75 8.75 12.6719 10.625 10.9844 11.75L9.01562 13.0156C8.6875 13.2031 8.5 13.5781 8.5 13.9531V14C8.5 14.8438 7.79688 15.5 7 15.5C6.15625 15.5 5.5 14.8438 5.5 14V13.9531C5.5 12.5469 6.20312 11.2344 7.375 10.4844L9.34375 9.21875C10.1875 8.65625 10.75 7.71875 10.75 6.6875V6.5C10.75 4.85938 9.39062 3.5 7.75 3.5H6.25C4.5625 3.5 3.25 4.85938 3.25 6.5ZM7 21.5C6.29688 21.5 5.6875 21.1719 5.35938 20.5625C5.03125 20 5.03125 19.2969 5.35938 18.6875C5.6875 18.125 6.29688 17.75 7 17.75C7.65625 17.75 8.26562 18.125 8.59375 18.6875C8.92188 19.2969 8.92188 20 8.59375 20.5625C8.26562 21.1719 7.65625 21.5 7 21.5Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="closeQuest">
                    <div className="closeInner" onClick={onClose}>
                        <svg width="16" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0312 3.07812L10.1094 8L15.0312 12.9688C15.6406 13.5312 15.6406 14.5156 15.0312 15.0781C14.4688 15.6875 13.4844 15.6875 12.9219 15.0781L8 10.1562L3.03125 15.0781C2.46875 15.6875 1.48438 15.6875 0.921875 15.0781C0.3125 14.5156 0.3125 13.5312 0.921875 12.9688L5.84375 8L0.921875 3.07812C0.3125 2.51562 0.3125 1.53125 0.921875 0.96875C1.48438 0.359375 2.46875 0.359375 3.03125 0.96875L8 5.89062L12.9219 0.96875C13.4844 0.359375 14.4688 0.359375 15.0312 0.96875C15.6406 1.53125 15.6406 2.51562 15.0312 3.07812Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            {isHelpPopupOpen && <HelpPopup onClose={closeHelpPopup} preloadedImages={preloadedImages} />}
            {isPreloading ? (
                <Preloader />
            ) : (
                isStartSceneClosed ? (
                    isCharacterSelected ? (
                        <Scene selectedCharacterIndex={selectedCharacterIndex} preloadedImages={preloadedImages} />
                    ) : (
                        <Characters onSelectCharacter={onCharacterSelect} preloadedImages={preloadedImages} />
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
