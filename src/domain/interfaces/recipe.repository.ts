import { Recipe } from "../entities/recipe.entity";

export abstract class RecipeRepository {
  abstract create(recipe: Recipe): Promise<void>;
  abstract findAll(): Promise<Recipe[]>;
  abstract findById(id: string): Promise<Recipe | null>;
}
