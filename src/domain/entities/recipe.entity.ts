export class Recipe {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly ingredients: string[],
    public readonly createdAt: Date
  ) {}
}
