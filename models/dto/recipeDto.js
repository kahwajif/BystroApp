 class RecipeDto {
    constructor(id, sourceId,name,author,recipeUrl,imageUrl,cookTimeMinutes,preparationTimeMinutes,servings,mainIngredient,ingredients){
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
    }
}

module.exports = RecipeDto;