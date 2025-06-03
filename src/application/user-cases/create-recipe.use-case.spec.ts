import { CreateRecipeUseCase } from "./create-recipe.use-case";
import { RecipeRepository } from "../../domain/interfaces/recipe.repository";
import { Recipe } from "../../domain/entities/recipe.entity";

describe("CreateRecipeUseCase", () => {
  let useCase: CreateRecipeUseCase;
  let recipeRepository: RecipeRepository;

  beforeEach(() => {
    recipeRepository = {
      create: jest
        .fn()
        .mockImplementation((recipe: Recipe) => Promise.resolve()),
    } as any;

    useCase = new CreateRecipeUseCase(recipeRepository);
  });

  it("should create a recipe successfully", async () => {
    const dto = {
      title: "Test Recipe",
      description: "Test Description",
      ingredients: ["ingredient1", "ingredient2"],
    };

    const result = await useCase.execute(dto);

    expect(recipeRepository.create).toHaveBeenCalled();
    expect(result.title).toBe(dto.title);
    expect(result.description).toBe(dto.description);
    expect(result.ingredients).toEqual(dto.ingredients);
  });
});
