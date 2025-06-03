import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { CreateRecipeUseCase } from "../../application/user-cases/create-recipe.use-case";
import { ListAllRecipesUseCase } from "../../application/user-cases/list-all-recipes.use-case";
import { GetRecipeByIdUseCase } from "../../application/user-cases/get-recipe-by-id.use-case";
import { RecipePresenter } from "../presenters/recipe.presenter";

class CreateRecipeDto {
  title!: string;
  description!: string;
  ingredients!: string[];
}

@Controller("recipes")
export class RecipeController {
  constructor(
    private readonly createRecipe: CreateRecipeUseCase,
    private readonly listAll: ListAllRecipesUseCase,
    private readonly getById: GetRecipeByIdUseCase
  ) {}

  @Post()
  async create(@Body() body: CreateRecipeDto) {
    const id = await this.createRecipe.execute(body);
    return RecipePresenter.toHTTP(id);
  }

  @Get()
  async list() {
    const recipes = await this.listAll.execute();
    return RecipePresenter.toHTTPList(recipes);
  }

  @Get(":id")
  async getByIdRoute(@Param("id") id: string) {
    const recipe = await this.getById.execute(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }
    return RecipePresenter.toHTTP(recipe);
  }
}
