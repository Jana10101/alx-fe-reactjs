import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="mt-8">
      {recipes.length === 0 ? (
        <p className="text-gray-500 text-center">No recipes yet. Add one above!</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="border p-4 mb-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export { RecipeList };