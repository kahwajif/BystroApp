 class RecipeDto {
    constructor(id, sourceId,name,author,recipeUrl,imageUrl,cookTimeMinutes,preparationTimeMinutes,servings,mainIngredient,ingredients,foods,instructions){
      this.id = id;
      this.sourceId = sourceId;
      this.name = name;
      this.author = author;
      this.recipeUrl = recipeUrl;
      this.imageUrl = imageUrl;
      this.cookTimeMinutes = cookTimeMinutes;
      this.preparationTimeMinutes = preparationTimeMinutes;
      this.servings = servings;
      this.mainIngredient = mainIngredient;
      this.ingredients = ingredients;
      this.foods = foods;
      this.instructions = instructions;
    }
}

module.exports = RecipeDto;