import { Ingredient } from './ingredient.model';
import { Food } from './food.model';

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
    ingredients: Ingredient[];
    foods: Food[]
}