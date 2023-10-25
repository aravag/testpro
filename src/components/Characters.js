import React from "react";

function Characters({ onSelectCharacter, preloadedImages}) {
  return (
    <div className="characters">
      <div className="char" onClick={() => onSelectCharacter(0)}>
        <div className="charInner">
          <img src={preloadedImages.char1.src} alt="character boy" />
        </div>
        <div className="btnChooseChar">
          <div className="chooseCharInner">
            Выбрать героя
          </div>
        </div>
      </div>
      <div className="char" onClick={() => onSelectCharacter(1)}>
        <div className="charInner">
          <img src={preloadedImages.char2.src} alt="character girl" />
        </div>
        <div className="btnChooseChar">
          <div className="chooseCharInner">
            Выбрать героя
          </div>
        </div>
      </div>
    </div>
  );
}

export default Characters;