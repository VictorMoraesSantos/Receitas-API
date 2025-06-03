import { Module } from "@nestjs/common";
import { RecipeController } from "./presentation/controllers/recipe.controller";
import { CreateRecipeUseCase } from "./application/user-cases/create-recipe.use-case";
import { ListAllRecipesUseCase } from "./application/user-cases/list-all-recipes.use-case";
import { GetRecipeByIdUseCase } from "./application/user-cases/get-recipe-by-id.use-case";
import { ImMemoryRecipeRepository } from "./infrastructure/repositories/in-memory-recipe.repository";

@Module({
  controllers: [RecipeController],
  providers: [
    // Repository
    {
      provide: "RecipeRepository",
      useClass: ImMemoryRecipeRepository,
    },
    // Use-cases
    {
      provide: CreateRecipeUseCase,
      useFactory: (repo) => new CreateRecipeUseCase(repo),
      inject: ["RecipeRepository"],
    },
    {
      provide: ListAllRecipesUseCase,
      useFactory: (repo) => new ListAllRecipesUseCase(repo),
      inject: ["RecipeRepository"],
    },
    {
      provide: GetRecipeByIdUseCase,
      useFactory: (repo) => new GetRecipeByIdUseCase(repo),
      inject: ["RecipeRepository"],
    },
  ],
})
export class AppModule {}
