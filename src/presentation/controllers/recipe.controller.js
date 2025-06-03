"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeController = void 0;
const common_1 = require("@nestjs/common");
const create_recipe_use_case_1 = require("../../application/user-cases/create-recipe.use-case");
const list_all_recipes_use_case_1 = require("../../application/user-cases/list-all-recipes.use-case");
const get_recipe_by_id_use_case_1 = require("../../application/user-cases/get-recipe-by-id.use-case");
const recipe_presenter_1 = require("../presenters/recipe.presenter");
class CreateRecipeDto {
}
let RecipeController = class RecipeController {
    constructor(createRecipe, listAll, getById) {
        this.createRecipe = createRecipe;
        this.listAll = listAll;
        this.getById = getById;
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield this.createRecipe.execute(body);
            return recipe_presenter_1.RecipePresenter.toHTTP(id);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const recipes = yield this.listAll.execute();
            return recipe_presenter_1.RecipePresenter.toHTTPList(recipes);
        });
    }
    getByIdRoute(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield this.getById.execute(id);
            if (!recipe) {
                throw new common_1.NotFoundException(`Recipe with id ${id} not found`);
            }
            return recipe_presenter_1.RecipePresenter.toHTTP(recipe);
        });
    }
};
exports.RecipeController = RecipeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateRecipeDto]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RecipeController.prototype, "getByIdRoute", null);
exports.RecipeController = RecipeController = __decorate([
    (0, common_1.Controller)("recipes"),
    __metadata("design:paramtypes", [create_recipe_use_case_1.CreateRecipeUseCase,
        list_all_recipes_use_case_1.ListAllRecipesUseCase,
        get_recipe_by_id_use_case_1.GetRecipeByIdUseCase])
], RecipeController);
