import { Food } from './food.model';
import { v4 as uuidv4 } from 'uuid';

export class Ingredient {
    id: string = '';
    sourceId: string = '';
    food: Food = new Food();
    name: string = '';
    unit: string = '';
    quantity: string = '';

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}