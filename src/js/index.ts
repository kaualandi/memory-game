import cards from "./card";
import Game from "./game";

const $game = document.querySelector('[data-game]') as HTMLDivElement;

const game = new Game($game, cards);

game.init()

console.log(cards);
