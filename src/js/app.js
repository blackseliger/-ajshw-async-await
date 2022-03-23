import GameSavingLoader from './GameSavingLoader';

// GameSavingLoader.load().then((saving) => {
//   console.log(saving);
// });

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (e) {
    console.error(e.mesage);
  }
})();
