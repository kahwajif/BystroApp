import { Ingredient } from './ingredient.model';
import { Food } from './food.model';
import { v4 as uuidv4 } from 'uuid';

export class Recipe {
    id: string;
    sourceId: string;
    name: string;
    author: string;
    recipeUrl: string;
    imageUrl: string;
    cookTimeMinutes: number;
    preparationTimeMinutes: number;
    servings: number;
    mainIngredient: string;
    ingredients: Ingredient[] = [];
    foods: Food[] = []
    instructions: string[] = [];

    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }
}