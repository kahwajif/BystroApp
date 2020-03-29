import { Food } from './food.model';

export class Ingredient {
    id: string;
    sourceId: string;
    food: Food;
    name: string;
    unit: string;
    quantity: string;
}