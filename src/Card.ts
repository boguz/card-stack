export class Card {
    private element: HTMLElement;
    private index: number;

    constructor(element: HTMLElement, index: number) {
        this.element = element;
        this.index = index;

        this.#init();
    }

    #init(): void {}
}