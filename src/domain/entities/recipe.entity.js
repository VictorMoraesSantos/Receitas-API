"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
class Recipe {
    constructor(id, title, description, ingredients, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.createdAt = createdAt;
    }
}
exports.Recipe = Recipe;
