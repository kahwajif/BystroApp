 class IngredientDto {
    constructor(id,sourceId,name,food,unit,quantity){
      this.id = id;
      this.sourceId = sourceId;
      this.name = name;
      this.food = food;
      this.unit = unit;
      this.quantity = quantity;
    }
}

module.exports = IngredientDto;