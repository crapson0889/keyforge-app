import { House } from "./house";
import { Cards } from "./cards";

export class Deck {
    id: string;
    name: string;
    houses: House[];
    cards: Cards;
}