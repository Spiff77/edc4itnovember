export interface Review {
    rate: number;
    name: string;
    email?: string;
    submitted: any;
    text: string;
}

export interface Recipe {
    ingredients?: string[];
    url?: string;
    image?: string;
    datePublished?: any;
    source?: string;
    cuisine?: string;
    author?: string;
    prepTime?: string;
    description?: string;
    id: string;
    title: string;
    difficulty?: number;
    reviews?: Review[];
    totalTime?: string;
    recipeYield?: string;
    cookTime?: string;
}

export interface RecipeFormExtraFields {
    _cookTime?: string;
    _prepTime?: string;
    _ingredients: string;
}


