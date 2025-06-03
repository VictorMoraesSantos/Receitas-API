import { Injectable } from "@nestjs/common";
import { Recipe } from "../../domain/entities/recipe.entity";
import { RecipeRepository } from "../../domain/interfaces/recipe.repository";

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(id: string): Promise<Recipe | null> {
    const recipe = await this.recipeRepository.findById(id);
    return recipe || null;
  }
}
