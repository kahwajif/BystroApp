import { Ingredient } from './ingredient.model';
import { v4 as uuidv4 } from 'uuid';

export class ShoppingListItem {
    foodId: string;
    quantity: string;
    description: string;
    isSelected: boolean;
    uuid: string;
    ingredientId: string;

    constructor() {
        if(!this.uuid) {
            this.uuid = uuidv4();
        }
    }
    
    fromIngredient(ingredient: Ingredient): ShoppingListItem {
        this.quantity = `${ingredient.quantity} ${ingredient.unit}`;
        this.description = `${ingredient.food.name}`;
        this.isSelected = false;
        this.ingredientId = ingredient.id;
        return this;
    }
}