import { Card } from "./Card";

export class CardStack {
    private stack: HTMLElement;
    private cards: Card[];

    constuctor(element: HTMLElement) {
        this.stack = element;

        const cardElements = this.stack.querySelectorAll('.card');
        this.cards = Array.from(cardElements).map((card, index) => new Card(card as HTMLElement, index));
    }
}