import { Card } from './card';

class Game {
    constructor(private dom: HTMLDivElement, private cards: Card[]) {
    }

    private firstCard: HTMLDivElement | undefined = undefined;
    private secondCard: HTMLDivElement | undefined = undefined;

    reset() {
        this.secondCard?.classList.remove("show");
        this.firstCard?.classList.remove("show");
        this.firstCard = undefined;
        this.secondCard = undefined;
    }

    checkWinner() {
        const cards = Array.from(this.dom.querySelectorAll("[data-card]"));
        const cardsWithShow = Array.from(this.dom.querySelectorAll(".show[data-card]"));

        if (cards.length === cardsWithShow.length) {
            const resetGameDiv = document.querySelector("[reset-game]") as HTMLDivElement;
            resetGameDiv.classList.remove("hidden");
            resetGameDiv.querySelector("button")?.addEventListener("click", () => {
                document.location.reload();
            });
        }
    }

    addListeners() {
        Array.from(this.dom.querySelectorAll("[data-card]")).forEach((card, i) => {
            card.addEventListener("click", e => {
                const cardClicked = e.currentTarget as HTMLDivElement;
                
                if (this.firstCard === cardClicked || this.secondCard === cardClicked || cardClicked.classList.contains("show")) return;

                if (!this.firstCard) {
                    this.firstCard = cardClicked;
                    this.firstCard.classList.add("show");
                } else if (!this.secondCard) {

                    this.secondCard = cardClicked;
                    this.secondCard.classList.add("show");
                    
                    const firstDataCardId = this.firstCard?.getAttribute("data-card");
                    const secondDataCardId = this.secondCard?.getAttribute("data-card");
                    if (firstDataCardId !== secondDataCardId) {
                        setTimeout(this.reset.bind(this), 1000);
                    } else {
                        this.firstCard = undefined;
                        this.secondCard = undefined;
                    }
                    this.checkWinner();
                }
            });
        })
    }

    init() {
        console.log("initing...");
        (document.querySelector("[reset-game]") as HTMLDivElement).classList.add("hidden");
        this.dom.innerHTML = `
            ${this.cards.map( card => (`
                <div class="card" data-card="${card.id}">
                    <img src="img/${card.img}" class="card-front" alt="${card.description}"/>
                    <img src="img/back.png" class="card-back" alt="Kauã Landi logo"/>
                </div>
            `)).join("")}
        `;
        this.addListeners();
    }
}

export default Game;