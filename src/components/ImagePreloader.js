export const imagePathsToPreload = {
    background1: './images/back1.png',
    background2: './images/back2.png',
    background3: './images/back3.png',
    background4: './images/back4.png',
    background5: './images/back5.png',
    background6: './images/back6.png',
    background7: './images/back7.png',
    background8: './images/back8.png',
    background9: './images/back9.png',
    background10: './images/back10.png',
    background11: './images/back11.png',
    background12: './images/back12.png',
    background13: './images/back13.png',
    background14: './images/back14.png',
    background15: './images/back15.png',
    background16: './images/back16.png',
    background17: './images/back17.png',
    background18: './images/back18.png',
    background19: './images/back19.png',
    background20: './images/back20.png',
    background21: './images/back21.png',
    background22: './images/back22.png',
    background23: './images/back23.png',
    background24: './images/back24.png',
    background25: './images/back25.png',
    background25b: './images/back25b.png',
    background26: './images/back26.png',
    background26b: './images/back26b.png',
    background26c: './images/back26c.png',
    background26d: './images/back26d.png',
    background27: './images/back27.png',
    background27b: './images/back27b.png',
    background27c: './images/back27c.png',
    background27d: './images/back27d.png',
    background28: './images/back28.png',
    background29: './images/back29.png',
    char11: './images/char1.1.svg',
    char12: './images/char1.2.svg',
    char13: './images/char1.3.svg',
    char14: './images/char1.4.svg',
    char15: './images/char1.5.svg',
    char16: './images/char1.6.svg',
    char21: './images/char2.1.svg',
    char22: './images/char2.2.svg',
    char23: './images/char2.3.svg',
    char24: './images/char2.4.svg',
    char25: './images/char2.5.svg',
    char26: './images/char2.6.svg',
    actionImage1: './images/action1.svg',
    actionImage2: './images/action2.png',
    actionImage3: './images/action3.png',
    actionImage4: './images/action4.png',
    actionImage5: './images/action5.png',
    actionImage6: './images/action6.svg',
    actionImage7: './images/action7.svg',
    actionImage8: './images/action8.svg',
    actionImage9: './images/action9.svg'
};

export const preloadImages = (imagePathsToPreload, callback) => {
    const preloadedImages = {};
  
    const imagePromises = [];
  
    for (const key in imagePathsToPreload) {
      const path = imagePathsToPreload[key];
      const image = new Image();
      image.src = path;
      imagePromises.push(
        new Promise((resolve, reject) => {
          image.onload = () => {
            preloadedImages[key] = image;
            resolve();
          };
          image.onerror = () => {
            reject();
          };
        })
      );
    }
  
    Promise.all(imagePromises)
      .then(() => {
        console.log('Изображения успешно предзагружены');
        if (typeof callback === 'function') {
          callback(preloadedImages);
        }
      })
      .catch(() => {
        console.error('Ошибка при предзагрузке изображений');
      });
  };