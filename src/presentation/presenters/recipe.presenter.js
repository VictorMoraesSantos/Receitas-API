"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipePresenter = void 0;
class RecipePresenter {
    static toHTTP(recipe) {
        return {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            createdAt: recipe.createdAt.toISOString(),
        };
    }
    static toHTTPList(recipes) {
        return recipes.map(this.toHTTP);
    }
}
exports.RecipePresenter = RecipePresenter;
