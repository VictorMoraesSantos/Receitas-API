import { Injectable } from "@nestjs/common";
import { Recipe } from "../../domain/entities/recipe.entity";
import { RecipeRepository } from "../../domain/interfaces/recipe.repository";

@Injectable()
export class ListAllRecipesUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    return this.recipeRepository.findAll();
  }
}
