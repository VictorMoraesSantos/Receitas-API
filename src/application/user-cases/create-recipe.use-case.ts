import { v4 as uuidv4 } from "uuid";
import { Recipe } from "../../domain/entities/recipe.entity";
import { RecipeRepository } from "../../domain/interfaces/recipe.repository";
import { Injectable } from "@nestjs/common";

interface CreateRecipeDTO {
  title: string;
  description: string;
  ingredients: string[];
}

@Injectable()
export class CreateRecipeUseCase {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  async execute(input: CreateRecipeDTO): Promise<Recipe> {
    const createdAt = new Date();

    const recipe: Recipe = {
      id: uuidv4(),
      title: input.title,
      description: input.description,
      ingredients: input.ingredients,
      createdAt,
    };

    await this.recipeRepository.create(recipe);
    return recipe;
  }
}
