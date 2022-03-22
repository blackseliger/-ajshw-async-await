import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    return new GameSaving(await json(await read()));
  }
}
