(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<top-nav></top-nav>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mb-0 mt-2\">Your Ingredients</h5>\r\n<h6 class=\"font-weight-bold mb-3 small\">add more ingredients to find better recipes</h6>\r\n\r\n<div *ngIf=\"savedFoods\" class=\"mb-2\">\r\n    <div *ngFor=\"let groupedFoods of getGroupedFoods()\" class=\"mb-3\">\r\n        <h6 class=\"font-weight-bold\">\r\n            <spice-image [foodTypeId]=\"groupedFoods[0].foodTypeId\"></spice-image>\r\n            <spice-text [foodTypeId]=\"groupedFoods[0].foodTypeId\"></spice-text>\r\n        </h6>\r\n        <div class=\"d-flex justify-content-between align-items-center border p-2 rounded mb-2 bg-white shadow-sm\"\r\n            *ngFor=\"let food of groupedFoods\">\r\n            <span>\r\n                <strong>{{food.name}}</strong>\r\n            </span>\r\n            <span class=\"align-middle text-danger\" (click)=\"removeFood(food)\">\r\n                <i class=\"fad fa-times fa-fw\"></i>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"savedFoods.length\" class=\"shadow-sm\">\r\n    <a class=\"btn btn-primary d-block\" routerLink=\"/recipes/find-recipe\">Find Recipes</a>\r\n</div>\r\n\r\n<!-- Add Ingredient Form -->\r\n<div id=\"add-ingredient-form\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Ingredient</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span><i class=\"fal fa-times\"></i></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"input-group mb-3\">\r\n                    <input class=\"form-control\" [(ngModel)]=\"query\" (ngModelChange)=\"searchFood()\">\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"fad fa-search fa-fw text-primary\"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"searchResults\" class=\"mb-2 overflow-auto overflow-scroll max-height-50\">\r\n                    <a class=\"d-block border p-2 rounded mb-2\" type=\"button\" data-toggle=\"modal\" data-target=\"#add-ingredient-form\"\r\n                        *ngFor=\"let food of searchResults\" (click)=\"saveFood(food)\">\r\n                        <spice-image [foodTypeId]=\"food.foodTypeId\"></spice-image>\r\n                        {{food.name}}\r\n                    </a>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Floating Action Button -->\r\n<div class=\"floating-action-button fab-blue active d-md-none\" data-toggle=\"modal\" data-target=\"#add-ingredient-form\">\r\n    <i class=\"fad fa-bookmark fa-plus fa-fw\"></i>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/menu/menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/menu/menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"bystro-backdrop\">a</div>\r\n<div class=\"bystro-menu\">\r\n    <div class=\"container py-3\">\r\n        <div class=\"row\">\r\n\r\n            <a routerLink=\"/recipes/favorite-recipes\" class=\"col col-md-6 col-xl-4\">\r\n                <div class=\"bystro-menu-item d-flex bg-white shadow-sm rounded\">\r\n                    <div class=\"d-flex align-items-center px-2\">\r\n                        <i class=\"fad fa-book-heart fa-fw fa-3x\"></i>\r\n                        <h3 class=\"mb-0 ml-3\">Favorite Recipes</h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <a routerLink=\"/recipes/custom-recipes\" class=\"col col-md-6 col-xl-4\">\r\n                <div class=\"bystro-menu-item d-flex bg-white shadow-sm rounded\">\r\n                    <div class=\"d-flex align-items-center px-2\">\r\n                        <i class=\"fad fa-hammer fa-fw fa-3x\"></i>\r\n                        <h3 class=\"mb-0 ml-3\">Custom Recipes</h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <a routerLink=\"/recipes/find-recipe\" class=\"col col-md-6 col-xl-4\">\r\n                <div class=\"bystro-menu-item d-flex bg-white shadow-sm rounded\">\r\n                    <div class=\"d-flex align-items-center px-2\">\r\n                        <i class=\"fad fa-search fa-fw fa-3x\"></i>\r\n                        <h3 class=\"mb-0 ml-3\">Find Recipes</h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <a routerLink=\"/spice-rack\" class=\"col col-md-6 col-xl-4\">\r\n                <div class=\"bystro-menu-item d-flex bg-white shadow-sm rounded\">\r\n                    <div class=\"d-flex align-items-center px-2\">\r\n                        <i class=\"fad fa-pepper-hot fa-fw fa-3x\"></i>\r\n                        <h3 class=\"mb-0 ml-3\">Spice Rack</h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n            <a routerLink=\"/shopping-list\" class=\"col col-md-6 col-xl-4\">\r\n                <div class=\"bystro-menu-item d-flex bg-white shadow-sm rounded\">\r\n                    <div class=\"d-flex align-items-center px-2\">\r\n                        <i class=\"fad fa-shopping-basket fa-fw fa-3x\"></i>\r\n                        <h3 class=\"mb-0 ml-3\">Shopping List</h3>\r\n                    </div>\r\n                </div>\r\n            </a>\r\n\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/shopping-list/shopping-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/shopping-list/shopping-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mt-2\">Shopping List</h5>\r\n\r\n<div class=\"bg-white rounded shadow-sm p-2 mb-5\">\r\n\r\n    <div *ngIf=\"!shoppingListItems.length\">\r\n        <p class=\"lead text-secondary\">\r\n            Nothing here yet. Add a new item or find a recipe and add the ingredients to the list.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"\">\r\n        <div class=\"d-flex justify-content-between align-items-center p-1 rounded my-1 border-bottom\"\r\n            *ngFor=\"let item of shoppingListItems\" (click)=\"toggleItemIsSelected(item)\">\r\n            <div class=\"d-flex align-items-center\">\r\n                <span class=\"fa-stack\" [class.text-success]=\"item.isSelected\" [class.text-secondary]=\"!item.isSelected\">\r\n                    <i class=\"fal fa-square fa-stack-2x\"></i>\r\n                    <i *ngIf=\"item.isSelected\" class=\"fal fa-check fa-stack-1x\"></i>\r\n                </span>\r\n                <strong>{{item.quantity}} {{item.description}}</strong>\r\n            </div>\r\n            <span class=\"align-middle text-danger\" (click)=\"removeFromShoppingList(item)\">\r\n                <i class=\"fad fa-times fa-fw\"></i>\r\n            </span>\r\n        </div>\r\n\r\n        <button *ngIf=\"hasSelectedItems\" class=\"btn btn-danger btn-block\" (click)=\"removeSelectedShoppingListItems()\">\r\n            Remove Selected\r\n        </button>\r\n    </div>\r\n\r\n    <!-- Shopping List Item Form -->\r\n    <div id=\"shopping-list-item-form\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\">Add to Shopping List</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span><i class=\"fal fa-times\"></i></span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">Units</span>\r\n                        </div>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"(optional)\" [(ngModel)]=\"quantity\">\r\n                    </div>\r\n                    <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">Item</span>\r\n                        </div>\r\n                        <input class=\"form-control\" [(ngModel)]=\"description\" (ngModelChange)=\"searchFood()\">\r\n                    </div>\r\n\r\n                    <div *ngIf=\"searchResults\" class=\"mb-2 overflow-auto overflow-scroll max-height-50\">\r\n                        <div class=\"d-flex justify-content-between border p-2 rounded mb-2\"\r\n                            *ngFor=\"let food of searchResults\" (click)=\"setDescription(food)\">\r\n                            <div class=\"align-middle justify-content-center\">\r\n                                {{food.name}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n                        (click)=\"saveToShoppingList()\">Save Item</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- Floating Action Button -->\r\n    <div class=\"floating-action-button fab-blue active d-md-none\" data-toggle=\"modal\"\r\n        data-target=\"#shopping-list-item-form\">\r\n        <i class=\"fad fa-bookmark fa-plus fa-fw\"></i>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/spice-rack/spice-rack.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/default/spice-rack/spice-rack.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mt-2\">Spice Rack</h5>\r\n\r\n<!-- Add Ingredient Form -->\r\n<div id=\"add-ingredient-form\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Add Spice</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span><i class=\"fal fa-times\"></i></span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"input-group mb-3\">\r\n                    <input class=\"form-control\" [(ngModel)]=\"query\" (ngModelChange)=\"searchSpice()\">\r\n                    <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"fad fa-search fa-fw text-primary\"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"searchResults\" class=\"mb-2 overflow-auto max-height-50 overflow-scroll\">\r\n                    <a class=\"d-flex justify-content-between border p-2 rounded mb-2\" type=\"button\" data-toggle=\"modal\" data-target=\"#add-ingredient-form\"\r\n                        *ngFor=\"let food of searchResults\" (click)=\"saveSpice(food)\">\r\n                        {{food.name}}\r\n                    </a>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Floating Action Button -->\r\n<div class=\"floating-action-button fab-blue active d-md-none\" data-toggle=\"modal\" data-target=\"#add-ingredient-form\">\r\n    <i class=\"fad fa-bookmark fa-plus fa-fw\"></i>\r\n</div>\r\n\r\n<a  class=\"d-flex justify-content-between border p-2 rounded mb-2 shadow-sm bg-white\" *ngFor=\"let food of spiceRack\">\r\n    <span>\r\n        <strong>{{food.name}}</strong><br />\r\n    </span>\r\n\r\n\r\n    <span class=\"align-middle text-danger\" (click)=\"removeFromSpiceRack(food)\">\r\n        <i class=\"fal fa-times\"></i>\r\n    </span>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/create-or-edit-recipe/create-or-edit-recipe.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/create-or-edit-recipe/create-or-edit-recipe.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mt-2 mb-3\">Custom Recipe</h5>\r\n\r\n<div class = \"form-group pt-2\">\r\n    <h6 class=\"font-weight-bold\">Recipe Name:</h6>\r\n    <input class=\"form-control form-control-sm\" type=\"text\" name=\"recipeName\" [(ngModel)]=\"recipe.name\">\r\n</div>\r\n\r\n<!-- Preparation Times -->\r\n<div class = \"form-row\">\r\n    <div class=\"col-6 mb-2\">\r\n        <h6 class=\"small\">Cook Time(minutes):</h6>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" name=\"cookTime\" [(ngModel)]=\"recipe.cookTimeMinutes\">\r\n    </div>\r\n    <div class=\"col-6 mb-2\">\r\n        <h6 class=\"small\">Preparation Time(minutes):</h6>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" name=\"cookTime\" [(ngModel)]=\"recipe.preparationTimeMinutes\">\r\n    </div>\r\n    <div class=\"col-6 mb-2\">\r\n        <h6 class=\"small\">Servings:</h6>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" name=\"cookTime\" [(ngModel)]=\"recipe.servings\">\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--Ingredients-->\r\n<h6 class=\"font-weight-bold mt-3\">Ingredients:</h6>\r\n<div *ngFor=\"let ingredient of recipe.ingredients; let i = index\">\r\n    <ng-container *ngIf=\"editIngredientIndex !== i\">\r\n        <div class=\"d-flex justify-content-between mb-1\">\r\n            <div class=\"text-break\">\r\n                {{ingredient.quantity}} {{ingredient.name}}\r\n            </div>\r\n            <div class=\"d-flex\">\r\n                <div>\r\n                    <button class=\"btn btn-warning btn-sm ml-1\" (click)=\"editIngredientIndex = i\">\r\n                        <i class=\"fal fa-pencil fa-fw\"></i>\r\n                    </button>\r\n                </div>\r\n                <div>\r\n                    <button class=\"btn btn-danger btn-sm ml-1\" (click)=\"removeIngredient(i)\">\r\n                        <i class=\"fal fa-times fa-fw\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"editIngredientIndex === i\">\r\n        <div class=\"form-row\">\r\n            <div class=\"col-5\">\r\n                <input type=\"text\" placeholder=\"Quantity\" class=\"form-control form-control-sm\" [(ngModel)]=\"recipe.ingredients[i].quantity\"/>\r\n            </div>\r\n            <div class=\"col-5\">\r\n                <input type=\"text\" placeholder=\"Ingredient\" class=\"form-control form-control-sm\" [(ngModel)]=\"recipe.ingredients[i].name\"/>\r\n            </div>\r\n            <div class=\"col-2 text-right\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"editIngredientIndex = -1\">\r\n                    <i class=\"fal fa-check fa-fw\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n\r\n<div class=\"form-row mt-2\" *ngIf=\"editIngredientIndex < 0\">\r\n    <div class=\"col-5\">\r\n        <input type=\"text\" placeholder=\"3 tbsp\" class=\"form-control form-control-sm\" [(ngModel)]=\"newIngredient.quantity\"/>\r\n    </div>\r\n    <div class=\"col-5\">\r\n        <input type=\"text\" placeholder=\"sugar\" class=\"form-control form-control-sm\" [(ngModel)]=\"newIngredient.name\"/>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"addIngredient()\">\r\n            <i class=\"fal fa-plus fa-fw\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Instructions -->\r\n<h6 class=\"font-weight-bold mt-3\">Instructions:</h6>\r\n<div *ngFor=\"let instruction of recipe.instructions; let i = index; trackBy:customTrackBy\">\r\n    <ng-container *ngIf=\"editInstructionIndex !== i\">\r\n        <div class=\"d-flex justify-content-between mb-1\">\r\n            <div>\r\n                <span class=\"text-break\">{{instruction}}</span>\r\n            </div>\r\n            <div class=\"d-flex flex-grow-0\">\r\n                <div>\r\n                    <button class=\"btn btn-warning btn-sm ml-1\" (click)=\"editInstructionIndex = i\">\r\n                        <i class=\"fal fa-pencil fa-fw\"></i>\r\n                    </button>\r\n                </div>\r\n                <div>\r\n                    <button class=\"btn btn-danger btn-sm ml-1\" (click)=\"removeInstruction(i)\">\r\n                        <i class=\"fal fa-times fa-fw\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"editInstructionIndex === i\">\r\n        <div class=\"form-row\">\r\n            <div class=\"col-10\">\r\n                <input type=\"text\" placeholder=\"Ingredient\" class=\"form-control form-control-sm\" [(ngModel)]=\"recipe.instructions[i]\"/>\r\n            </div>\r\n            <div class=\"col-2 text-right\">\r\n                <button class=\"btn btn-primary btn-sm\" (click)=\"editInstructionIndex = -1;\">\r\n                    <i class=\"fal fa-check fa-fw\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<div class=\"form-row\" *ngIf=\"editInstructionIndex < 0\">\r\n    <div class=\"col-10\">\r\n        <input type=\"text\" placeholder=\"dissolve 3 tbsp of sugar in warm water\" class=\"form-control form-control-sm\" [(ngModel)]=\"newInstruction\"/>\r\n    </div>\r\n    <div class=\"col text-right\">\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"addInstruction()\">\r\n            <i class=\"fal fa-plus fa-fw\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<button class=\"btn btn-primary d-block btn-block mt-2\" (click)=\"saveRecipe()\">Save</button>\r\n<a class=\"btn btn-secondary d-block mb-5 mt-2\" routerLink=\"/recipes/view-added-recipe\">Back</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/custom-recipes/custom-recipes.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/custom-recipes/custom-recipes.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mb-0 mt-2\">Custom Recipes</h5>\r\n<h6 class=\"font-weight-bold mb-3 small\">your custom recipes</h6>\r\n\r\n\r\n<div class=\"rounded p-2 mb-5\">\r\n    <div *ngIf=\"!recipes.length\">\r\n        <p class=\"lead text-secondary\">\r\n            Nothing here yet. Search for recipes and add them to your favorites.\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-4 mb-3\" *ngFor=\"let recipe of recipes\">\r\n            <recipe-card [recipe]=\"recipe\" [showRemoveButton]=\"true\" (removeButtonClicked)=\"removeCustomRecipe(recipe)\"></recipe-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Floating Action Button -->\r\n<a class=\"floating-action-button fab-blue active d-md-none\" routerLink=\"/recipes/create-recipe\"><i class=\"fad fa-bookmark fa-plus fa-fw\"></i></a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/favorite-recipes/favorite-recipes.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/favorite-recipes/favorite-recipes.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mt-2\">Favourite Recipes</h5>\r\n\r\n<div *ngIf=\"!favoriteRecipes.length\" class=\"bg-white rounded p-2 shadow-sm\">\r\n    <p class=\"lead text-secondary\">\r\n        Nothing here yet. Search for recipes and add them to your favorites.\r\n    </p>\r\n</div>\r\n\r\n<div class=\"rounded p-2 mb-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-4 mb-3\" *ngFor=\"let recipe of favoriteRecipes\">\r\n            <recipe-card [recipe]=\"recipe\" [showRemoveButton]=\"true\" (removeButtonClicked)=\"removeFavoriteRecipe(recipe)\"></recipe-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-ingredient/find-ingredient.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-ingredient/find-ingredient.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Find ingredients</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-recipe/find-recipe.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-recipe/find-recipe.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"font-weight-bold mb-0 mt-2\">Recipes</h5>\r\n<h6 class=\"font-weight-bold mb-3 small\">based on your ingredients</h6>\r\n\r\n<div class=\"rounded p-2 mb-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-4 mb-3\" *ngFor=\"let recipe of recipes\">\r\n            <recipe-card [recipe]=\"recipe\" [showRemoveButton]=\"false\"></recipe-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<a class=\"btn btn-primary d-block mb-5\" routerLink=\"/\">Back to Ingredients</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/view-recipe/view-recipe.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/view-recipe/view-recipe.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"recipe\">\r\n    <div *ngIf=\"recipe.imageUrl\" class=\"row\" style=\"height: 150px; background-size: cover; background-position: center;\" [style.backgroundImage]=\"'url('+ recipe.imageUrl +')'\">\r\n        &nbsp;\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-between align-items-center mt-2\">\r\n        <div>\r\n            <h5 class=\"font-weight-bold\">{{recipe.name}}</h5>\r\n            <h6>by <strong>{{recipe.author}}</strong></h6>\r\n        </div>\r\n\r\n        <button *ngIf=\"isFavorite\" (click)=\"toggleFavoriteRecipe(recipe)\" class=\"d-none d-md-block btn btn-danger float-right\">\r\n            Remove from Favorites\r\n        </button>\r\n        <button *ngIf=\"!isFavorite\" (click)=\"toggleFavoriteRecipe(recipe)\" class=\"d-none d-md-block btn btn-success float-right\">\r\n            Add to Favorites\r\n        </button>\r\n    </div>\r\n\r\n    <table class=\"mb-3\">\r\n        <tr>\r\n            <td>Preparation Time:</td>\r\n            <td>{{recipe.preparationTimeMinutes}} min</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Cook Time:</td>\r\n            <td>{{recipe.cookTimeMinutes}} min</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <h6 class=\"font-weight-bold mt-2\">Ingredients (serves {{recipe.servings}})</h6>\r\n    <div *ngFor=\"let ingredient of recipe.ingredients\">\r\n        {{ingredient.quantity}} {{ingredient.unit}} {{ingredient.food.name}}\r\n    </div>\r\n\r\n    <h6 class=\"font-weight-bold mt-2\">Instructions</h6>\r\n    <ul *ngFor=\"let instruction of recipe.instructions\">\r\n        <li>{{instruction}}</li>\r\n    </ul>\r\n</div>\r\n\r\n<div class=\"row mt-3\" *ngIf=\"recipe\">\r\n    <div *ngIf=\"!isCustomRecipe\" class=\"col-sm-3 mb-2\">\r\n        <a routerLink=\"/recipes/find-recipe\" class=\"btn btn-secondary w-100\">Back to Recipes</a>\r\n    </div>\r\n    <div *ngIf=\"isCustomRecipe\" class=\"col-sm-3 mb-2\">\r\n        <a routerLink=\"/recipes/custom-recipes\" class=\"btn btn-secondary w-100\">Back to Custom Recipes</a>\r\n    </div>\r\n    <div class=\"col-sm-3 mb-2\">\r\n        <a href=\"{{recipe.recipeUrl}}\" class=\"btn btn-primary w-100\">View Original</a>\r\n    </div>\r\n    <div class=\"col-sm-3 mb-2\">\r\n        <button (click)=\"addIngredientsToShoppingList(recipe)\" class=\"btn btn-warning w-100\">Add to Shopping List</button>\r\n    </div>\r\n    <div *ngIf=\"!isCustomRecipe\" class=\"col-sm-3 mb-2\">\r\n        <a [routerLink]=\"['/recipes/edit-recipe', recipe.id]\" class=\"btn btn-warning w-100\">Customize this Recipe</a>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"recipe && !isCustomRecipe\" class=\"floating-action-button fab-yellow d-md-none\" [class.active]=\"isFavorite\" (click)=\"toggleFavoriteRecipe(recipe)\">\r\n    <i class=\"fad fa-bookmark fa-fw\"></i>\r\n</div>\r\n\r\n<div *ngIf=\"recipe && isCustomRecipe\" class=\"floating-action-button fab-yellow d-md-none active\" [routerLink]=\"['/recipes/edit-recipe', recipe.id]\">\r\n    <i class=\"fad fa-pencil fa-fw\"></i>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/top-nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/top-nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-white\">\r\n\t<div class=\"container\">\r\n\t\t<a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n\t\t\t<i class=\"fad fa-soup\"></i>\r\n\t\t\tBystro\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n<nav class=\"navbar navbar-light p-0 nav-primary bg-white sticky-top\">\r\n\t<div class=\"container\">\r\n\t\t<ul class=\"nav d-flex w-100 justify-content-between justify-content-md-start\">\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-home fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-home\"></i>\r\n\t\t\t\t\t\tHome\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item d-none d-sm-block\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/recipes/find-recipe']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-hat-chef fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-hat-chef\"></i>\r\n\t\t\t\t\t\tRecipes\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/recipes/favorite-recipes']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bookmark fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bookmark\"></i>\r\n\t\t\t\t\t\tFavourites\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/shopping-list']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-shopping-basket fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-shopping-basket\"></i>\r\n\t\t\t\t\t\tShopping List\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n            </li>\r\n            <li class=\"nav-item d-none d-sm-block\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/spice-rack']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-inbox fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-inbox\"></i>\r\n\t\t\t\t\t\tSpice Rack\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/notifications']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bell fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bell\"></i>\r\n\t\t\t\t\t\tNotifications\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"nav-item\">\r\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/menu']\" routerLinkActive=\"active\">\r\n\t\t\t\t\t<span class=\"d-md-none small\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bars fa-2x\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span class=\"d-none d-md-block\">\r\n\t\t\t\t\t\t<i class=\"fad fa-bars\"></i>\r\n\t\t\t\t\t\tOthers\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-card/recipe-card.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-card/recipe-card.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [routerLink]=\"['/recipes/find-recipe', recipe.id]\" class=\"card h-100 mb-3 shadow-sm text-dark text-decoration-none\">\r\n    <div class=\"row no-gutters mb-2\">\r\n        <div class=\"col-12 position-relative\">\r\n            <img *ngIf=\"recipe.imageUrl\" [src]=\"recipe.imageUrl\" class=\"card-img\" alt=\"...\">\r\n            <button *ngIf=\"showRemoveButton\" type=\"button\" class=\"close text-danger p-2 position-absolute position-top-right\" \r\n                (click)=\"removeRecipe($event, recipe)\"\r\n            >\r\n                <span aria-hidden=\"true\"><i class=\"fad fa-times\"></i></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"col-12\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title font-weight-bold\">{{recipe.name}}</h5>\r\n                <span>{{getNumberOfMatchingItems()}}/{{recipe.foods.length}} matching ingredients</span><br />\r\n                <span>Preparation Time: {{recipe.preparationTimeMinutes}} min</span><br />\r\n                <span>Cook Time: {{recipe.cookTimeMinutes}} min</span><br />\r\n                <span>Servings: {{recipe.servings}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</a>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-image/spice-image.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-image/spice-image.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"foodTypeId === 0\">\r\n    <i class=\"fad fa-fw fa-utensils text-primary\"></i>\r\n</span>\r\n<span *ngIf=\"foodTypeId === 1\">\r\n    <i class=\"fad fa-fw fa-pepper-hot text-danger\"></i>\r\n</span>\r\n<span *ngIf=\"foodTypeId === 2\">\r\n    <i class=\"fad fa-fw fa-seedling text-success\"></i>\r\n</span>\r\n<span *ngIf=\"foodTypeId === 3\">\r\n    <i class=\"fad fa-fw fa-meat text-secondary\"></i>\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-text/spice-text.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-text/spice-text.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span *ngIf=\"foodTypeId === 0\">\r\n    Others\r\n</span>\r\n<span *ngIf=\"foodTypeId === 1\">\r\n    Spices\r\n</span>\r\n<span *ngIf=\"foodTypeId === 2\">\r\n    Produce\r\n</span>\r\n<span *ngIf=\"foodTypeId === 3\">\r\n    Meat\r\n</span>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _default_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/home/home.component */ "./src/app/default/home/home.component.ts");
/* harmony import */ var _default_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/menu/menu.component */ "./src/app/default/menu/menu.component.ts");
/* harmony import */ var _default_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/shopping-list/shopping-list.component */ "./src/app/default/shopping-list/shopping-list.component.ts");
/* harmony import */ var _default_spice_rack_spice_rack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/spice-rack/spice-rack.component */ "./src/app/default/spice-rack/spice-rack.component.ts");







const appRoutes = [
    { path: '', component: _default_home_home_component__WEBPACK_IMPORTED_MODULE_3__["DefaultHomeComponent"] },
    { path: 'menu', component: _default_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["DefaultMenuComponent"] },
    { path: 'shopping-list', component: _default_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_5__["DefaultShoppingListComponent"] },
    { path: 'spice-rack', component: _default_spice_rack_spice_rack_component__WEBPACK_IMPORTED_MODULE_6__["DefaultSpiceRackComponent"] },
    {
        path: 'recipes',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./recipe/recipe.module */ "./src/app/recipe/recipe.module.ts")).then(m => m.RecipeModule),
        data: { preload: true }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/nav/top-nav.component */ "./src/app/shared/nav/top-nav.component.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _shared_spice_image_spice_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/spice-image/spice-image.component */ "./src/app/shared/spice-image/spice-image.component.ts");
/* harmony import */ var _shared_spice_text_spice_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/spice-text/spice-text.component */ "./src/app/shared/spice-text/spice-text.component.ts");
/* harmony import */ var _shared_bystro_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/bystro-common.module */ "./src/app/shared/bystro-common.module.ts");
/* harmony import */ var _default_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default/home/home.component */ "./src/app/default/home/home.component.ts");
/* harmony import */ var _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipe/recipe.module */ "./src/app/recipe/recipe.module.ts");
/* harmony import */ var _default_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default/menu/menu.component */ "./src/app/default/menu/menu.component.ts");
/* harmony import */ var _default_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./default/shopping-list/shopping-list.component */ "./src/app/default/shopping-list/shopping-list.component.ts");
/* harmony import */ var _default_spice_rack_spice_rack_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default/spice-rack/spice-rack.component */ "./src/app/default/spice-rack/spice-rack.component.ts");







// shared components





// pages





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _shared_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_7__["TopNavComponent"],
            _shared_spice_image_spice_image_component__WEBPACK_IMPORTED_MODULE_9__["SpiceImageComponent"],
            _shared_spice_text_spice_text_component__WEBPACK_IMPORTED_MODULE_10__["SpiceTextComponent"],
            _default_home_home_component__WEBPACK_IMPORTED_MODULE_12__["DefaultHomeComponent"],
            _default_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["DefaultMenuComponent"],
            _default_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_15__["DefaultShoppingListComponent"],
            _default_spice_rack_spice_rack_component__WEBPACK_IMPORTED_MODULE_16__["DefaultSpiceRackComponent"]
        ],
        exports: [],
        imports: [
            _shared_bystro_common_module__WEBPACK_IMPORTED_MODULE_11__["BystroCommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_13__["RecipeModule"],
        ],
        providers: [_shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_8__["AppSettingsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/default/home/home.component.less":
/*!**************************************************!*\
  !*** ./src/app/default/home/home.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overflow-scroll {\n  overflow: scroll;\n}\n.max-height-50 {\n  max-height: 50vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9ob21lL0M6L1VzZXJzL2ZlcmFzL09uZURyaXZlL0RvY3VtZW50cy9Qcm9qZWN0cy9CeXN0cm9BcHAvQnlzdHJvQXBwL3NyYy9hcHAvZGVmYXVsdC9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RlZmF1bHQvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJmbG93LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm1heC1oZWlnaHQtNTAge1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG59IiwiLm92ZXJmbG93LXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ubWF4LWhlaWdodC01MCB7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/default/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/default/home/home.component.ts ***!
  \************************************************/
/*! exports provided: DefaultHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHomeComponent", function() { return DefaultHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");






let DefaultHomeComponent = class DefaultHomeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.query = '';
        this.baseUrl = '';
        this.savedFoods = [];
        this.saveToSpiceRack = (food) => {
            this._settings.addToSpiceRack(food);
        };
        this.onFoodsLoaded = (data) => {
            let savedFoods = this._settings.getSavedFoods();
            let savedFoodIds = savedFoods.map(food => food.id);
            this.searchResults = data.results.filter(result => !lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](savedFoodIds, result.id));
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.baseUrl = this._settings.getBaseUrl();
        this.getSavedFoods();
    }
    searchFood() {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}`)
            .subscribe({
            next: this.onFoodsLoaded
        });
    }
    saveFood(food) {
        var savedFoods = this._settings.getSavedFoods();
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["find"](savedFoods, { id: food.id })) {
            this._settings.addSavedFood(food);
            this.searchResults = [];
            this.query = '';
            this.getSavedFoods();
        }
    }
    removeFood(food) {
        this._settings.removeFood(food);
        this.getSavedFoods();
    }
    getSavedFoods() {
        this.savedFoods = this._settings.getSavedFoods().sort((a, b) => {
            return Date.parse(b.dateAdded.toString()) - Date.parse(a.dateAdded.toString());
        });
    }
    getGroupedFoods() {
        let foods = lodash__WEBPACK_IMPORTED_MODULE_4__["orderBy"](this.savedFoods, ['foodTypeId'], ['desc']);
        let grouping = lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"](foods, f => f.foodTypeId);
        let sortedGrouping = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](grouping, g => foods.indexOf(g[0]));
        return lodash__WEBPACK_IMPORTED_MODULE_4__["values"](sortedGrouping);
    }
};
DefaultHomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_app_shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_5__["AppSettingsService"] }
];
DefaultHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.less */ "./src/app/default/home/home.component.less")).default]
    })
], DefaultHomeComponent);



/***/ }),

/***/ "./src/app/default/menu/menu.component.less":
/*!**************************************************!*\
  !*** ./src/app/default/menu/menu.component.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#bystro-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #bde3fc;\n  z-index: -1;\n  height: 100vh;\n  width: 100vw;\n}\n.bystro-menu {\n  background-color: #bde3fc;\n  overflow: hidden;\n}\n.bystro-menu-item {\n  height: 72px;\n  margin-bottom: 1rem;\n}\n@media only screen and (min-width: 768px) {\n  .bystro-menu-item {\n    height: 128px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9tZW51L0M6L1VzZXJzL2ZlcmFzL09uZURyaXZlL0RvY3VtZW50cy9Qcm9qZWN0cy9CeXN0cm9BcHAvQnlzdHJvQXBwL3NyYy9hcHAvZGVmYXVsdC9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RlZmF1bHQvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUFlLFlBQUE7QUNFbkI7QURDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJO0lBQ0ksYUFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0L21lbnUvbWVudS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNieXN0cm8tYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZTNmYztcbiAgICB6LWluZGV4OiAtMTtcbiAgICBoZWlnaHQ6IDEwMHZoOyB3aWR0aDogMTAwdnc7XG59XG5cbi5ieXN0cm8tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZTNmYztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnlzdHJvLW1lbnUtaXRlbSB7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuYnlzdHJvLW1lbnUtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgfVxufVxuIiwiI2J5c3Ryby1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRlM2ZjO1xuICB6LWluZGV4OiAtMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuLmJ5c3Ryby1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZTNmYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ieXN0cm8tbWVudS1pdGVtIHtcbiAgaGVpZ2h0OiA3MnB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuYnlzdHJvLW1lbnUtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMjhweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/default/menu/menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/default/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: DefaultMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMenuComponent", function() { return DefaultMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");





let DefaultMenuComponent = class DefaultMenuComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
DefaultMenuComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"] }
];
DefaultMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.less */ "./src/app/default/menu/menu.component.less")).default]
    })
], DefaultMenuComponent);



/***/ }),

/***/ "./src/app/default/shopping-list/shopping-list.component.less":
/*!********************************************************************!*\
  !*** ./src/app/default/shopping-list/shopping-list.component.less ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overflow-scroll {\n  overflow: scroll;\n}\n.max-height-50 {\n  max-height: 50vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9zaG9wcGluZy1saXN0L0M6L1VzZXJzL2ZlcmFzL09uZURyaXZlL0RvY3VtZW50cy9Qcm9qZWN0cy9CeXN0cm9BcHAvQnlzdHJvQXBwL3NyYy9hcHAvZGVmYXVsdC9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RlZmF1bHQvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJmbG93LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm1heC1oZWlnaHQtNTAge1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG59IiwiLm92ZXJmbG93LXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ubWF4LWhlaWdodC01MCB7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/default/shopping-list/shopping-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/default/shopping-list/shopping-list.component.ts ***!
  \******************************************************************/
/*! exports provided: DefaultShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultShoppingListComponent", function() { return DefaultShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_models_shopping_list_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/shopping-list-item.model */ "./src/models/shopping-list-item.model.ts");






let DefaultShoppingListComponent = class DefaultShoppingListComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.shoppingListItems = [];
        this.searchResults = [];
        this.baseUrl = '';
        this.hasSelectedItems = false;
        this.saveToShoppingList = () => {
            var item = new src_models_shopping_list_item_model__WEBPACK_IMPORTED_MODULE_5__["ShoppingListItem"]();
            item.quantity = this.quantity;
            item.description = this.description;
            item.foodId = this.foodId;
            this._settings.addShoppingListItem(item);
            this.resetForm();
            this.getShoppingList();
        };
        this.removeFromShoppingList = (shoppingListItem) => {
            this._settings.removeFromShoppingList(shoppingListItem);
            this.getShoppingList();
        };
        this.getShoppingList = () => {
            this.shoppingListItems = this._settings.getShoppingListItems();
            this.hasSelectedItems = this.shoppingListItems.filter(i => i.isSelected).length > 0;
        };
        this.searchFood = () => {
            this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.description}`)
                .subscribe({
                next: this.onFoodsLoaded
            });
        };
        this.onFoodsLoaded = (data) => {
            this.searchResults = data.results;
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.baseUrl = this._settings.getBaseUrl();
        this.getShoppingList();
    }
    resetForm() {
        this.quantity = '';
        this.description = '';
        this.foodId = '';
    }
    removeSelectedShoppingListItems() {
        this._settings.removeSelectedShoppingListItems();
        this.getShoppingList();
    }
    setDescription(food) {
        this.foodId = food.id;
        this.description = food.name;
        this.searchResults = [];
    }
    toggleItemIsSelected(item) {
        item.isSelected = !item.isSelected;
        this._settings.updateShoppingListItem(item);
        this.getShoppingList();
    }
};
DefaultShoppingListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
DefaultShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/shopping-list/shopping-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-list.component.less */ "./src/app/default/shopping-list/shopping-list.component.less")).default]
    })
], DefaultShoppingListComponent);



/***/ }),

/***/ "./src/app/default/spice-rack/spice-rack.component.less":
/*!**************************************************************!*\
  !*** ./src/app/default/spice-rack/spice-rack.component.less ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".overflow-scroll {\n  overflow: scroll;\n}\n.max-height-50 {\n  max-height: 50vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9zcGljZS1yYWNrL0M6L1VzZXJzL2ZlcmFzL09uZURyaXZlL0RvY3VtZW50cy9Qcm9qZWN0cy9CeXN0cm9BcHAvQnlzdHJvQXBwL3NyYy9hcHAvZGVmYXVsdC9zcGljZS1yYWNrL3NwaWNlLXJhY2suY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2RlZmF1bHQvc3BpY2UtcmFjay9zcGljZS1yYWNrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RlZmF1bHQvc3BpY2UtcmFjay9zcGljZS1yYWNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJmbG93LXNjcm9sbCB7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm1heC1oZWlnaHQtNTAge1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG59IiwiLm92ZXJmbG93LXNjcm9sbCB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4ubWF4LWhlaWdodC01MCB7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/default/spice-rack/spice-rack.component.ts":
/*!************************************************************!*\
  !*** ./src/app/default/spice-rack/spice-rack.component.ts ***!
  \************************************************************/
/*! exports provided: DefaultSpiceRackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSpiceRackComponent", function() { return DefaultSpiceRackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






let DefaultSpiceRackComponent = class DefaultSpiceRackComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.query = '';
        this.spiceRack = [];
        this.baseUrl = '';
        this.removeFromSpiceRack = (food) => {
            this._settings.removeFromSpiceRack(food);
            this.getSpiceRack();
        };
        this.getSpiceRack = () => {
            this.spiceRack = this._settings.getSpiceRack();
        };
        this.onSpiceRackLoaded = (data) => {
            var spiceResults = [];
            //get spices only
            for (var item of data.results) {
                if (item.foodTypeId == 1) {
                    spiceResults.push(item);
                }
            }
            this.searchResults = spiceResults;
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.spiceRack = this._settings.getSpiceRack();
    }
    searchSpice() {
        this._http.get(`${this.baseUrl}/api/food?limit=10&page=1&name=${this.query}&foodTypeId=1`)
            .subscribe({
            next: this.onSpiceRackLoaded
        });
    }
    saveSpice(food) {
        var savedSpices = this._settings.getSpiceRack();
        if (!lodash__WEBPACK_IMPORTED_MODULE_5__["find"](savedSpices, { id: food.id })) {
            this._settings.addToSpiceRack(food);
            this.searchResults = [];
            this.query = '';
            this.getSpiceRack();
        }
    }
};
DefaultSpiceRackComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
DefaultSpiceRackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spice-rack.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/default/spice-rack/spice-rack.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spice-rack.component.less */ "./src/app/default/spice-rack/spice-rack.component.less")).default]
    })
], DefaultSpiceRackComponent);



/***/ }),

/***/ "./src/app/recipe/create-or-edit-recipe/create-recipe.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/recipe/create-or-edit-recipe/create-recipe.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecipeCreateRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCreateRecipeComponent", function() { return RecipeCreateRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var src_models_recipe_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/recipe.model */ "./src/models/recipe.model.ts");
/* harmony import */ var src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/ingredient.model */ "./src/models/ingredient.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_models_food_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/food.model */ "./src/models/food.model.ts");









let RecipeCreateRecipeComponent = class RecipeCreateRecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings, _router) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this._router = _router;
        this.recipe = new src_models_recipe_model__WEBPACK_IMPORTED_MODULE_5__["Recipe"]();
        this.newIngredient = new src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__["Ingredient"]();
        this.newInstruction = '';
        this.editIngredientIndex = -1;
        this.editInstructionIndex = -1;
        if (!this.recipe.name) {
            this.recipe.name = 'My Custom Recipe';
        }
        this.recipe.author = 'you';
    }
    ngAfterViewInit() { }
    ngOnInit() {
    }
    saveRecipe() {
        this._settings.addOrUpdateCustomRecipe(this.recipe);
        this._router.navigateByUrl(`/recipes/find-recipe/${this.recipe.id}`);
    }
    addIngredient() {
        if (this.newIngredient.name) {
            this.newIngredient.food = new src_models_food_model__WEBPACK_IMPORTED_MODULE_8__["Food"]();
            this.newIngredient.food.name = this.newIngredient.name;
            this.recipe.ingredients.push(this.newIngredient);
            this.newIngredient = new src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__["Ingredient"]();
        }
    }
    removeIngredient(index) {
        this.recipe.ingredients.splice(index, 1);
    }
    addInstruction() {
        if (this.newInstruction) {
            this.recipe.instructions.push(this.newInstruction);
            this.newInstruction = '';
        }
    }
    removeInstruction(index) {
        this.recipe.instructions.splice(index, 1);
    }
    // prevent refreshing instructions form when change is added
    customTrackBy(index, obj) {
        return index;
    }
};
RecipeCreateRecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
RecipeCreateRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-or-edit-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/create-or-edit-recipe/create-or-edit-recipe.component.html")).default
    })
], RecipeCreateRecipeComponent);



/***/ }),

/***/ "./src/app/recipe/create-or-edit-recipe/edit-recipe.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/recipe/create-or-edit-recipe/edit-recipe.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecipeEditRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditRecipeComponent", function() { return RecipeEditRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var src_models_recipe_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/models/recipe.model */ "./src/models/recipe.model.ts");
/* harmony import */ var src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/ingredient.model */ "./src/models/ingredient.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_models_food_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/models/food.model */ "./src/models/food.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");











let RecipeEditRecipeComponent = class RecipeEditRecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings, _router, route) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this._router = _router;
        this.route = route;
        this.recipe = new src_models_recipe_model__WEBPACK_IMPORTED_MODULE_5__["Recipe"]();
        this.newIngredient = new src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__["Ingredient"]();
        this.newInstruction = '';
        this.editIngredientIndex = -1;
        this.editInstructionIndex = -1;
        if (!this.recipe.name) {
            this.recipe.name = 'My Custom Recipe';
        }
        this.recipe.author = 'you';
    }
    ngAfterViewInit() { }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('id');
            var customRecipes = this._settings.getCustomRecipes();
            var recipeIndex = lodash__WEBPACK_IMPORTED_MODULE_9__["findIndex"](customRecipes, r => r.id === id);
            if (recipeIndex >= 0) {
                this.recipe = customRecipes[recipeIndex];
            }
            else {
                this._http.get(`${this._settings.getBaseUrl()}/api/recipe/${id}`)
                    .subscribe((response) => {
                    this.recipe = response;
                    this.recipe.id = Object(uuid__WEBPACK_IMPORTED_MODULE_10__["v4"])();
                    this.recipe.name = `[Copy] ${this.recipe.name}`;
                    this.recipe.author = 'you';
                });
            }
        });
    }
    saveRecipe() {
        this._settings.addOrUpdateCustomRecipe(this.recipe);
        this._router.navigateByUrl(`/recipes/find-recipe/${this.recipe.id}`);
    }
    addIngredient() {
        if (this.newIngredient.name) {
            this.newIngredient.food = new src_models_food_model__WEBPACK_IMPORTED_MODULE_8__["Food"]();
            this.newIngredient.food.name = this.newIngredient.name;
            this.recipe.ingredients.push(this.newIngredient);
            this.newIngredient = new src_models_ingredient_model__WEBPACK_IMPORTED_MODULE_6__["Ingredient"]();
        }
    }
    removeIngredient(index) {
        this.recipe.ingredients.splice(index, 1);
    }
    addInstruction() {
        if (this.newInstruction) {
            this.recipe.instructions.push(this.newInstruction);
            this.newInstruction = '';
        }
    }
    removeInstruction(index) {
        this.recipe.instructions.splice(index, 1);
    }
    // prevent refreshing instructions form when change is added
    customTrackBy(index, obj) {
        return index;
    }
};
RecipeEditRecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
RecipeEditRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-or-edit-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/create-or-edit-recipe/create-or-edit-recipe.component.html")).default
    })
], RecipeEditRecipeComponent);



/***/ }),

/***/ "./src/app/recipe/custom-recipes/custom-recipes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/recipe/custom-recipes/custom-recipes.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecipeCustomRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCustomRecipesComponent", function() { return RecipeCustomRecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");




let RecipeCustomRecipesComponent = class RecipeCustomRecipesComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _settings) {
        super(injector);
        this._settings = _settings;
        this.recipes = [];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.recipes = this._settings.getCustomRecipes();
    }
    removeCustomRecipe(recipe) {
        this._settings.removeCustomRecipe(recipe);
        this.recipes = this._settings.getCustomRecipes();
    }
};
RecipeCustomRecipesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
RecipeCustomRecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./custom-recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/custom-recipes/custom-recipes.component.html")).default
    })
], RecipeCustomRecipesComponent);



/***/ }),

/***/ "./src/app/recipe/favorite-recipes/favorite-recipes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/recipe/favorite-recipes/favorite-recipes.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecipeFavoriteRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeFavoriteRecipeComponent", function() { return RecipeFavoriteRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let RecipeFavoriteRecipeComponent = class RecipeFavoriteRecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.favoriteRecipes = [];
        this.removeFavoriteRecipe = (recipe) => {
            this._settings.removeFavoriteRecipe(recipe);
            this.getFavoriteRecipes();
        };
        this.getFavoriteRecipes = () => {
            this.favoriteRecipes = this._settings.getFavoriteRecipes();
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.favoriteRecipes = this._settings.getFavoriteRecipes();
    }
};
RecipeFavoriteRecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
RecipeFavoriteRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/favorite-recipes/favorite-recipes.component.html")).default
    })
], RecipeFavoriteRecipeComponent);



/***/ }),

/***/ "./src/app/recipe/find-ingredient/find-ingredient.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/recipe/find-ingredient/find-ingredient.component.ts ***!
  \*********************************************************************/
/*! exports provided: RecipeFindIngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeFindIngredientComponent", function() { return RecipeFindIngredientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");



let RecipeFindIngredientComponent = class RecipeFindIngredientComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
RecipeFindIngredientComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
RecipeFindIngredientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./find-ingredient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-ingredient/find-ingredient.component.html")).default
    })
], RecipeFindIngredientComponent);



/***/ }),

/***/ "./src/app/recipe/find-recipe/find-recipe.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipe/find-recipe/find-recipe.component.ts ***!
  \*************************************************************/
/*! exports provided: RecipeFindRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeFindRecipeComponent", function() { return RecipeFindRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let RecipeFindRecipeComponent = class RecipeFindRecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.savedFoods = [];
        this.recipes = [];
        this.onRecipesLoaded = (res) => {
            this.recipes = res.results;
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.savedFoods = this._settings.getSavedFoods().concat(this._settings.getSpiceRack());
        this._http.post(`${this._settings.getBaseUrl()}/api/recipe`, {
            foodIds: this.savedFoods.map(food => food.id),
            page: 1,
            limit: 10
        })
            .subscribe({
            next: this.onRecipesLoaded
        });
    }
};
RecipeFindRecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
RecipeFindRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./find-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/find-recipe/find-recipe.component.html")).default
    })
], RecipeFindRecipeComponent);



/***/ }),

/***/ "./src/app/recipe/recipe-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/recipe/recipe-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RecipeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeRoutingModule", function() { return RecipeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _find_ingredient_find_ingredient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-ingredient/find-ingredient.component */ "./src/app/recipe/find-ingredient/find-ingredient.component.ts");
/* harmony import */ var _find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-recipe/find-recipe.component */ "./src/app/recipe/find-recipe/find-recipe.component.ts");
/* harmony import */ var _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-recipe/view-recipe.component */ "./src/app/recipe/view-recipe/view-recipe.component.ts");
/* harmony import */ var _favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite-recipes/favorite-recipes.component */ "./src/app/recipe/favorite-recipes/favorite-recipes.component.ts");
/* harmony import */ var _recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _create_or_edit_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-or-edit-recipe/create-recipe.component */ "./src/app/recipe/create-or-edit-recipe/create-recipe.component.ts");
/* harmony import */ var _create_or_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-or-edit-recipe/edit-recipe.component */ "./src/app/recipe/create-or-edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _custom_recipes_custom_recipes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-recipes/custom-recipes.component */ "./src/app/recipe/custom-recipes/custom-recipes.component.ts");











let RecipeRoutingModule = class RecipeRoutingModule {
};
RecipeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'recipes',
                    component: _recipe_component__WEBPACK_IMPORTED_MODULE_7__["RecipeComponent"],
                    children: [
                        { path: 'find-ingredient', component: _find_ingredient_find_ingredient_component__WEBPACK_IMPORTED_MODULE_3__["RecipeFindIngredientComponent"] },
                        { path: 'find-recipe', component: _find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_4__["RecipeFindRecipeComponent"] },
                        { path: 'find-recipe/:id', component: _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeViewRecipeComponent"] },
                        { path: 'favorite-recipes', component: _favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_6__["RecipeFavoriteRecipeComponent"] },
                        { path: 'create-recipe', component: _create_or_edit_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_8__["RecipeCreateRecipeComponent"] },
                        { path: 'edit-recipe/:id', component: _create_or_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_9__["RecipeEditRecipeComponent"] },
                        { path: 'custom-recipes', component: _custom_recipes_custom_recipes_component__WEBPACK_IMPORTED_MODULE_10__["RecipeCustomRecipesComponent"] }
                    ]
                }
            ])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], RecipeRoutingModule);



/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");



let RecipeComponent = class RecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
RecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '<router-outlet></router-outlet>',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
    })
], RecipeComponent);



/***/ }),

/***/ "./src/app/recipe/recipe.module.ts":
/*!*****************************************!*\
  !*** ./src/app/recipe/recipe.module.ts ***!
  \*****************************************/
/*! exports provided: RecipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeModule", function() { return RecipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-routing.module */ "./src/app/recipe/recipe-routing.module.ts");
/* harmony import */ var _recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _find_ingredient_find_ingredient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-ingredient/find-ingredient.component */ "./src/app/recipe/find-ingredient/find-ingredient.component.ts");
/* harmony import */ var _find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find-recipe/find-recipe.component */ "./src/app/recipe/find-recipe/find-recipe.component.ts");
/* harmony import */ var _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-recipe/view-recipe.component */ "./src/app/recipe/view-recipe/view-recipe.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _create_or_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-or-edit-recipe/edit-recipe.component */ "./src/app/recipe/create-or-edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _custom_recipes_custom_recipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-recipes/custom-recipes.component */ "./src/app/recipe/custom-recipes/custom-recipes.component.ts");
/* harmony import */ var _create_or_edit_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-or-edit-recipe/create-recipe.component */ "./src/app/recipe/create-or-edit-recipe/create-recipe.component.ts");
/* harmony import */ var _favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favorite-recipes/favorite-recipes.component */ "./src/app/recipe/favorite-recipes/favorite-recipes.component.ts");
/* harmony import */ var _shared_bystro_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/bystro-common.module */ "./src/app/shared/bystro-common.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let RecipeModule = class RecipeModule {
};
RecipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _recipe_component__WEBPACK_IMPORTED_MODULE_3__["RecipeComponent"],
            _find_ingredient_find_ingredient_component__WEBPACK_IMPORTED_MODULE_4__["RecipeFindIngredientComponent"],
            _find_recipe_find_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeFindRecipeComponent"],
            _favorite_recipes_favorite_recipes_component__WEBPACK_IMPORTED_MODULE_11__["RecipeFavoriteRecipeComponent"],
            _view_recipe_view_recipe_component__WEBPACK_IMPORTED_MODULE_6__["RecipeViewRecipeComponent"],
            _create_or_edit_recipe_create_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeCreateRecipeComponent"],
            _create_or_edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_8__["RecipeEditRecipeComponent"],
            _custom_recipes_custom_recipes_component__WEBPACK_IMPORTED_MODULE_9__["RecipeCustomRecipesComponent"]
        ],
        imports: [
            _shared_bystro_common_module__WEBPACK_IMPORTED_MODULE_12__["BystroCommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _recipe_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecipeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ],
        providers: []
    })
], RecipeModule);



/***/ }),

/***/ "./src/app/recipe/view-recipe/view-recipe.component.less":
/*!***************************************************************!*\
  !*** ./src/app/recipe/view-recipe/view-recipe.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS92aWV3LXJlY2lwZS92aWV3LXJlY2lwZS5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/recipe/view-recipe/view-recipe.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipe/view-recipe/view-recipe.component.ts ***!
  \*************************************************************/
/*! exports provided: RecipeViewRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeViewRecipeComponent", function() { return RecipeViewRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_models_recipe_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/models/recipe.model */ "./src/models/recipe.model.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);








let RecipeViewRecipeComponent = class RecipeViewRecipeComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, _http, _settings, route) {
        super(injector);
        this._http = _http;
        this._settings = _settings;
        this.route = route;
        this.recipe = new src_models_recipe_model__WEBPACK_IMPORTED_MODULE_6__["Recipe"]();
        this.isFavorite = false;
        this.isCustomRecipe = false;
        this.toggleFavoriteRecipe = (recipe) => {
            if (this.isRecipeInFavorites(recipe)) {
                this._settings.removeFavoriteRecipe(recipe);
            }
            else {
                this._settings.addFavoriteRecipe(recipe);
            }
            this.isFavorite = !this.isFavorite;
        };
        this.addIngredientsToShoppingList = (recipe) => {
            this._settings.addIngredientsToShoppingList(recipe.ingredients);
        };
        this.onRecipeLoaded = (response) => {
            this.recipe = response;
            this.isFavorite = this.isRecipeInFavorites(response);
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('id');
            var customRecipes = this._settings.getCustomRecipes();
            var recipeIndex = lodash__WEBPACK_IMPORTED_MODULE_7__["findIndex"](customRecipes, r => r.id === id);
            if (recipeIndex >= 0) {
                this.recipe = customRecipes[recipeIndex];
                this.isCustomRecipe = true;
            }
            else {
                this._http.get(`${this._settings.getBaseUrl()}/api/recipe/${id}`)
                    .subscribe({
                    next: this.onRecipeLoaded
                });
            }
        });
    }
    isRecipeInFavorites(recipe) {
        var favoriteRecipes = this._settings.getFavoriteRecipes();
        return favoriteRecipes.filter(r => r.id === recipe.id).length > 0;
    }
};
RecipeViewRecipeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
RecipeViewRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/view-recipe/view-recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-recipe.component.less */ "./src/app/recipe/view-recipe/view-recipe.component.less")).default]
    })
], RecipeViewRecipeComponent);



/***/ }),

/***/ "./src/app/shared/bystro-common.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/bystro-common.module.ts ***!
  \************************************************/
/*! exports provided: BystroCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BystroCommonModule", function() { return BystroCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-card/recipe-card.component */ "./src/app/shared/recipe-card/recipe-card.component.ts");
/* harmony import */ var _services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let BystroCommonModule = class BystroCommonModule {
};
BystroCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_2__["RecipeCardComponent"]
        ],
        exports: [
            _recipe_card_recipe_card_component__WEBPACK_IMPORTED_MODULE_2__["RecipeCardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        providers: [_services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]]
    })
], BystroCommonModule);



/***/ }),

/***/ "./src/app/shared/nav/top-nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/nav/top-nav.component.ts ***!
  \*************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TopNavComponent = class TopNavComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
    }
};
TopNavComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
TopNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./top-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav/top-nav.component.html")).default,
        selector: 'top-nav',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
    })
], TopNavComponent);



/***/ }),

/***/ "./src/app/shared/recipe-card/recipe-card.component.less":
/*!***************************************************************!*\
  !*** ./src/app/shared/recipe-card/recipe-card.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".position-top-right {\n  top: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JlY2lwZS1jYXJkL0M6L1VzZXJzL2ZlcmFzL09uZURyaXZlL0RvY3VtZW50cy9Qcm9qZWN0cy9CeXN0cm9BcHAvQnlzdHJvQXBwL3NyYy9hcHAvc2hhcmVkL3JlY2lwZS1jYXJkL3JlY2lwZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvcmVjaXBlLWNhcmQvcmVjaXBlLWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JlY2lwZS1jYXJkL3JlY2lwZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9uLXRvcC1yaWdodCB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufSIsIi5wb3NpdGlvbi10b3AtcmlnaHQge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/shared/recipe-card/recipe-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/recipe-card/recipe-card.component.ts ***!
  \*************************************************************/
/*! exports provided: RecipeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeCardComponent", function() { return RecipeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/appsettings.service */ "./src/app/shared/services/appsettings.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





let RecipeCardComponent = class RecipeCardComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"] {
    constructor(injector, _appSettingsService) {
        super(injector);
        this._appSettingsService = _appSettingsService;
        this.showRemoveButton = false;
        this.removeButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeRecipe(event, recipe) {
        event.preventDefault();
        this.removeButtonClicked.emit();
        event.stopPropagation();
    }
    getNumberOfMatchingItems() {
        let availableFoodIds = this._appSettingsService.getSavedFoods();
        let recipeFoodIds = this.recipe.foods;
        let commonFoodIds = lodash__WEBPACK_IMPORTED_MODULE_4__["intersectionWith"](availableFoodIds, recipeFoodIds, (a, b) => {
            return a.id.toString() == b.toString();
        });
        return commonFoodIds.length;
    }
};
RecipeCardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _services_appsettings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], RecipeCardComponent.prototype, "recipe", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], RecipeCardComponent.prototype, "showRemoveButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], RecipeCardComponent.prototype, "removeButtonClicked", void 0);
RecipeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/recipe-card/recipe-card.component.html")).default,
        selector: 'recipe-card',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-card.component.less */ "./src/app/shared/recipe-card/recipe-card.component.less")).default]
    })
], RecipeCardComponent);



/***/ }),

/***/ "./src/app/shared/services/appsettings.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/appsettings.service.ts ***!
  \********************************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_models_shopping_list_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/shopping-list-item.model */ "./src/models/shopping-list-item.model.ts");





let AppSettingsService = class AppSettingsService {
    getBaseUrl() {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    // FOODS ==============================================================================
    addSavedFood(food) {
        var foods = this.getSavedFoods();
        food.dateAdded = new Date();
        foods.push(food);
        this.setSavedFoods(foods);
    }
    removeFood(food) {
        var foods = this.getSavedFoods();
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](foods, f => f.name == food.name);
        this.setSavedFoods(foods);
    }
    getSavedFoods() {
        let foods = localStorage.getItem('foods');
        return foods ? JSON.parse(foods) : [];
    }
    setSavedFoods(foods) {
        localStorage.setItem('foods', JSON.stringify(foods));
    }
    // END FOODS ==========================================================================
    // SHOPPING LIST ITEMS ================================================================
    addShoppingListItem(item) {
        var items = this.getShoppingListItems();
        items.push(item);
        this.setShoppingListItems(items);
    }
    addShoppingListItems(items) {
        var shoppingListItems = this.getShoppingListItems();
        this.setShoppingListItems(lodash__WEBPACK_IMPORTED_MODULE_3__["union"](shoppingListItems, items));
    }
    addIngredientToShoppingList(ingredient) {
        var item = new src_models_shopping_list_item_model__WEBPACK_IMPORTED_MODULE_4__["ShoppingListItem"]().fromIngredient(ingredient);
        this.addShoppingListItem(item);
    }
    addIngredientsToShoppingList(ingredients) {
        var items = ingredients.map(ingredient => new src_models_shopping_list_item_model__WEBPACK_IMPORTED_MODULE_4__["ShoppingListItem"]().fromIngredient(ingredient));
        this.addShoppingListItems(items);
    }
    getShoppingListItems() {
        let items = localStorage.getItem('shoppingListItems');
        return items ? JSON.parse(items) : [];
    }
    setShoppingListItems(items) {
        localStorage.setItem('shoppingListItems', JSON.stringify(items));
    }
    updateShoppingListItem(item) {
        var items = this.getShoppingListItems();
        var index = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](items, i => i.uuid === item.uuid);
        items[index] = item;
        this.setShoppingListItems(items);
    }
    removeFromShoppingList(item) {
        var items = this.getShoppingListItems();
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](items, i => i.uuid === item.uuid);
        this.setShoppingListItems(items);
    }
    removeSelectedShoppingListItems() {
        var items = this.getShoppingListItems().filter(i => !i.isSelected);
        this.setShoppingListItems(items);
    }
    // END SHOPPING LIST ITEMS ============================================================
    // CUSTOM RECIPES =====================================================================
    addCustomRecipe(recipe) {
        var recipes = this.getCustomRecipes();
        recipes.push(recipe);
        this.setCustomRecipes(recipes);
    }
    getCustomRecipes() {
        let recipes = localStorage.getItem('customRecipes');
        return recipes ? JSON.parse(recipes) : [];
    }
    setCustomRecipes(recipes) {
        localStorage.setItem('customRecipes', JSON.stringify(recipes));
    }
    removeCustomRecipe(recipe) {
        var recipes = this.getCustomRecipes();
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](recipes, i => i.id === recipe.id);
        this.setCustomRecipes(recipes);
    }
    updateCustomRecipe(recipe) {
        var recipes = this.getCustomRecipes();
        var index = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](recipes, i => i.id === recipe.id);
        recipes[index] = recipe;
        this.setCustomRecipes(recipes);
    }
    addOrUpdateCustomRecipe(recipe) {
        var recipes = this.getCustomRecipes();
        let index = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](recipes, i => i.id === recipe.id);
        if (index >= 0) {
            this.updateCustomRecipe(recipe);
        }
        else {
            this.addCustomRecipe(recipe);
        }
    }
    // END CUSTOM RECIPES =================================================================
    // FAVORITE RECIPES ===================================================================
    getFavoriteRecipes() {
        let recipes = localStorage.getItem('favoriteRecipes');
        return recipes ? JSON.parse(recipes) : [];
    }
    addFavoriteRecipe(recipe) {
        var recipes = this.getFavoriteRecipes();
        recipes.push(recipe);
        this.setFavoriteRecipes(recipes);
    }
    setFavoriteRecipes(recipes) {
        localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
    }
    removeFavoriteRecipe(recipe) {
        var recipes = this.getFavoriteRecipes();
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](recipes, r => r.id == recipe.id);
        this.setFavoriteRecipes(recipes);
    }
    // END FAVORITE RECIPES ===============================================================
    // SPICE RACK =========================================================================
    addToSpiceRack(food) {
        var foods = this.getSpiceRack();
        food.dateAdded = new Date();
        foods.push(food);
        this.setSpiceRack(foods);
    }
    removeFromSpiceRack(food) {
        var foods = this.getSpiceRack();
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](foods, f => f.name == food.name);
        this.setSpiceRack(foods);
    }
    getSpiceRack() {
        let foods = localStorage.getItem('spice');
        return foods ? JSON.parse(foods) : [];
    }
    setSpiceRack(foods) {
        localStorage.setItem('spice', JSON.stringify(foods));
    }
};
AppSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppSettingsService);



/***/ }),

/***/ "./src/app/shared/spice-image/spice-image.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/spice-image/spice-image.component.ts ***!
  \*************************************************************/
/*! exports provided: SpiceImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiceImageComponent", function() { return SpiceImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SpiceImageComponent = class SpiceImageComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
    }
};
SpiceImageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SpiceImageComponent.prototype, "foodTypeId", void 0);
SpiceImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spice-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-image/spice-image.component.html")).default,
        selector: 'spice-image',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
    })
], SpiceImageComponent);



/***/ }),

/***/ "./src/app/shared/spice-text/spice-text.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/spice-text/spice-text.component.ts ***!
  \***********************************************************/
/*! exports provided: SpiceTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpiceTextComponent", function() { return SpiceTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SpiceTextComponent = class SpiceTextComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_1__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
    }
};
SpiceTextComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], SpiceTextComponent.prototype, "foodTypeId", void 0);
SpiceTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spice-text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spice-text/spice-text.component.html")).default,
        selector: 'spice-text',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
    })
], SpiceTextComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    baseUrl: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/models/food.model.ts":
/*!**********************************!*\
  !*** ./src/models/food.model.ts ***!
  \**********************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Food {
}


/***/ }),

/***/ "./src/models/ingredient.model.ts":
/*!****************************************!*\
  !*** ./src/models/ingredient.model.ts ***!
  \****************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _food_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.model */ "./src/models/food.model.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



class Ingredient {
    constructor() {
        this.id = '';
        this.sourceId = '';
        this.food = new _food_model__WEBPACK_IMPORTED_MODULE_1__["Food"]();
        this.name = '';
        this.unit = '';
        this.quantity = '';
        if (!this.id) {
            this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        }
    }
}


/***/ }),

/***/ "./src/models/recipe.model.ts":
/*!************************************!*\
  !*** ./src/models/recipe.model.ts ***!
  \************************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


class Recipe {
    constructor() {
        this.ingredients = [];
        this.foods = [];
        this.instructions = [];
        if (!this.id) {
            this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        }
    }
}


/***/ }),

/***/ "./src/models/shopping-list-item.model.ts":
/*!************************************************!*\
  !*** ./src/models/shopping-list-item.model.ts ***!
  \************************************************/
/*! exports provided: ShoppingListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListItem", function() { return ShoppingListItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");


class ShoppingListItem {
    constructor() {
        if (!this.uuid) {
            this.uuid = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        }
    }
    fromIngredient(ingredient) {
        this.quantity = `${ingredient.quantity} ${ingredient.unit}`;
        this.description = `${ingredient.food.name}`;
        this.isSelected = false;
        this.ingredientId = ingredient.id;
        return this;
    }
}


/***/ }),

/***/ "./src/shared/app-component-base.ts":
/*!******************************************!*\
  !*** ./src/shared/app-component-base.ts ***!
  \******************************************/
/*! exports provided: AppComponentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentBase", function() { return AppComponentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AppComponentBase {
    constructor(injector) {
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\feras\OneDrive\Documents\Projects\BystroApp\BystroApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map