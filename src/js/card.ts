function shuffle(array: Card[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export interface Card {
    id: string;
    description: string;
    img: string;
}

const uniqueCards: Card[] = [
    { id: "1", description: "card1", img: "01.png" },
    { id: "2", description: "card2", img: "02.png" },
    { id: "3", description: "card3", img: "03.png" },
    { id: "4", description: "card4", img: "04.png" },
    { id: "5", description: "card5", img: "05.png" },
    { id: "6", description: "card6", img: "06.png" },
    { id: "7", description: "card7", img: "07.png" },
    { id: "8", description: "card8", img: "08.png" },
];

const originalsCards: Card[] = [];

uniqueCards.forEach((card) => {
    originalsCards.push({ ...card });
    originalsCards.push({ ...card });
});

const cards: Card[] = shuffle(originalsCards);

export default cards;
