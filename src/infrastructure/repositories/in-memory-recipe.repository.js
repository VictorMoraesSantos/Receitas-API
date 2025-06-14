"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.ImMemoryRecipeRepository = void 0;
const common_1 = require("@nestjs/common");
const recipe_repository_1 = require("../../domain/interfaces/recipe.repository");
let ImMemoryRecipeRepository = class ImMemoryRecipeRepository extends recipe_repository_1.RecipeRepository {
    constructor() {
        super(...arguments);
        this.recipes = [];
    }
    create(recipe) {
        return __awaiter(this, void 0, void 0, function* () {
            this.recipes.push(recipe);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipes;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = this.recipes.find((r) => r.id === id)) !== null && _a !== void 0 ? _a : null;
        });
    }
};
exports.ImMemoryRecipeRepository = ImMemoryRecipeRepository;
exports.ImMemoryRecipeRepository = ImMemoryRecipeRepository = __decorate([
    (0, common_1.Injectable)()
], ImMemoryRecipeRepository);
