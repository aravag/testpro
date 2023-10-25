import React, { useState, useEffect, useRef } from 'react';
import sceneConfigurations from './sceneConfigurations';
import Overlay from './Overlay';

function Scene({ selectedCharacterIndex, preloadedImages }) {
    const currentScene = sceneConfigurations(preloadedImages);
    const [sceneCounter, setSceneCounter] = useState(1);
    const [dialogCounter, setDialogCounter] = useState(0);
    const [textAnimationComplete, setTextAnimationComplete] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayOpacity, setOverlayOpacity] = useState(0);
    const [showButtonsContainer, setShowButtonsContainer] = useState(false);
    const [buttonsContainerOpacity, setButtonsContainerOpacity] = useState(0);
    const [showArrowUp, setShowArrowUp] = useState(false);
    const [showArrowDown, setShowArrowDown] = useState(false);
    const buttonsContainerRef = useRef(null);
    const [showActionImage, setShowActionImage] = useState(false);
    const [actionImageOpacity, setActionImageOpacity] = useState(0);
    const textElementRef = useRef(null);

    const currentDialogue = currentScene[sceneCounter].dialogues[dialogCounter];
    const { absBtn, rowFlexBtns, imgWidth, backgPoz, actionImage, text, hideChar, btns, title } = currentDialogue || {};
    const { char, background, left } = currentScene[sceneCounter] || {};

    const btnsContainerClass = rowFlexBtns ? 'btnsContainer rowFlexBtns' : 'btnsContainer';
    const actionImageStyle = imgWidth ? { maxWidth: imgWidth } : {};
    const btnsWrapperStyle = (absBtn || rowFlexBtns) ? { position: 'unset' } : {};

    const textToDisplay = Array.isArray(text) && text.length > selectedCharacterIndex ? text[selectedCharacterIndex] : text;

    function fadeIn(opacity, display) {
        display(true);
        setTimeout(() => {
            opacity(1);
        }, 10);
    }

    function fadeOut(opacity, display) {
        opacity(0);
        setTimeout(() => {
            display(false);
        }, 300);
    }

    const updateButtonsArrows = () => {
        if (buttonsContainerRef.current) {
            if (buttonsContainerRef.current.scrollHeight > buttonsContainerRef.current.clientHeight && buttonsContainerRef.current.offsetHeight !== 0) {
                handleScroll();
                buttonsContainerRef.current.addEventListener('scroll', handleScroll);
            } else {
                buttonsContainerRef.current.removeEventListener('scroll', handleScroll);
                hideArrows();
            }
        }
    };

    const handleScroll = () => {
        if (buttonsContainerRef.current) {
            if (buttonsContainerRef.current.scrollTop <= 0) {
                setShowArrowUp(false);
                setShowArrowDown(true);
            } else if (
                buttonsContainerRef.current.scrollTop > 0 &&
                buttonsContainerRef.current.scrollTop + buttonsContainerRef.current.clientHeight < buttonsContainerRef.current.scrollHeight
            ) {
                setShowArrowUp(true);
                setShowArrowDown(true);
            } else if (buttonsContainerRef.current.scrollTop + buttonsContainerRef.current.clientHeight >= buttonsContainerRef.current.scrollHeight) {
                setShowArrowUp(true);
                setShowArrowDown(false);
            }
        }
    };

    const hideArrows = () => {
        setShowArrowUp(false);
        setShowArrowDown(false);
    };

    function scrollUp() {
        if (buttonsContainerRef.current) {
            buttonsContainerRef.current.scrollTop = 0;
        }
    }

    function scrollDown() {
        if (buttonsContainerRef.current) {
            buttonsContainerRef.current.scrollTop += buttonsContainerRef.current.scrollHeight;
        }
    }

    const nextScene = () => {
        if (sceneCounter < currentScene.length - 1) {
            fadeOut(setButtonsContainerOpacity, setShowButtonsContainer);
            hideArrows();
            if (dialogCounter < currentScene[sceneCounter].dialogues.length - 1) {
                setDialogCounter(dialogCounter + 1);
            } else {
                fadeIn(setOverlayOpacity, setShowOverlay);
                setTimeout(() => {
                    setSceneCounter(sceneCounter + 1);
                    setDialogCounter(0);
                    setTimeout(() => {
                        fadeOut(setOverlayOpacity, setShowOverlay);
                    }, 200);
                }, 300);
            }
            setTextAnimationComplete(false);
        }
    };

    useEffect(() => {
        if (buttonsContainerRef.current) {
            buttonsContainerRef.current.addEventListener('scroll', handleScroll);
            updateButtonsArrows();
        }

        window.addEventListener('resize', updateButtonsArrows);

        return () => {
            if (buttonsContainerRef.current) {
                buttonsContainerRef.current.removeEventListener('scroll', handleScroll);
            }

            window.removeEventListener('resize', updateButtonsArrows);
        };
    }, [sceneCounter, dialogCounter, selectedCharacterIndex]);

    useEffect(() => {
        function typewriterEffect(textElement, text, speed, callback) {
            let charIndex = 0;
            const lines = text.split('<br>');

            const spans = [];

            lines.forEach(line => {
                line.split('').forEach(char => {
                    if (char === "\n") {
                        textElement.appendChild(document.createElement('br'));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = char;
                        textElement.appendChild(span);
                        spans.push(span);
                    }
                });
            });

            function type() {
                if (charIndex < spans.length) {
                    spans[charIndex].style.opacity = 1;
                    charIndex++;
                    setTimeout(type, speed);
                } else {
                    setTextAnimationComplete(true);
                    fadeIn(setButtonsContainerOpacity, setShowButtonsContainer);
                    setTimeout(updateButtonsArrows, 10);
                }
            }

            type();
        }
        const textElement = textElementRef.current;

        if (textElement) {
            const textToAnimate = textToDisplay.replace(/<br>/g, '\n');
            textElement.innerHTML = '';
            typewriterEffect(textElement, textToAnimate, 20, null);
        }
    }, [textToDisplay]);

    return (
        <div className="scene">
            <div className="questBackground">
                <img
                    src={background}
                    alt="background"
                    style={{
                        filter: actionImage ? 'brightness(0.4)' : '',
                        objectFit: backgPoz ? 'contain' : '',
                        background: backgPoz ? '#000000' : ''
                    }}
                />
            </div>
            {char && (
                <div className="currentChar" style={{ display: hideChar ? 'none' : 'block' }}>
                    {selectedCharacterIndex !== null && (
                        <img
                            src={selectedCharacterIndex === 0 ? char[0] : char[1]}
                            alt="character"
                            style={{ left: left !== undefined ? left : '' }}
                        />
                    )}
                </div>
            )}
            <div className="actions">
                <div className="btnsWrapper" style={btnsWrapperStyle}>
                    {showArrowUp && (
                        <div className="arrow arrowUp" onClick={scrollUp}>
                            <div className="arrowInner arrowUpInner"></div>
                        </div>
                    )}
                    {showArrowDown && (
                        <div className="arrow arrowDown" onClick={scrollDown}>
                            <div className="arrowInner arrowDownInner"></div>
                        </div>
                    )}
                    {showButtonsContainer && textAnimationComplete && (
                        <div className={btnsContainerClass} style={{ opacity: buttonsContainerOpacity }} ref={buttonsContainerRef}>
                            {btns.map((btn, index) => (
                                <div className={`btn${index === 0 && absBtn ? ' absBtn' : ''}`} key={index} onClick={nextScene}>
                                    <div className="btnInner" dangerouslySetInnerHTML={{ __html: btn }} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="textContainer">
                    <div className="textInner">
                        {title && <div className="title">{title}</div>}
                        <div className="text" ref={textElementRef}></div>
                    </div>
                </div>
                {actionImage && (
                    <div className="actionImage">
                        <img src={actionImage} alt="image" style={actionImageStyle} />
                    </div>
                )}
            </div>
            {showOverlay && <Overlay style={{ opacity: overlayOpacity }} />}
        </div>
    );
}

export default Scene;