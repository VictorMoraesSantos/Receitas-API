import { Injectable } from "@nestjs/common";
import { Recipe } from "../../domain/entities/recipe.entity";
import { RecipeRepository } from "../../domain/interfaces/recipe.repository";

@Injectable()
export class ImMemoryRecipeRepository extends RecipeRepository {
  private recipes: Recipe[] = [];

  async create(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes;
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find((r) => r.id === id) ?? null;
  }
}
