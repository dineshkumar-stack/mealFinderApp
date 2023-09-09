import React, { useState } from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import axios from 'axios';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (ingredients) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`)
      .then((response) => {
        const newRecipes = response.data.meals || [];
        setRecipes(newRecipes);
        if (newRecipes.length === 0) {
          setError('No food found');
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setError('An error occurred while fetching recipes. Please try again later.');
      });
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <div className='bg'></div>
      <RecipeSearch onSearch={handleSearch} />
      {error && <div className="alert alert-danger container" style={{ marginTop: "90px" }}>{error}</div>}
      <RecipeList recipes={recipes} onRecipeSelect={handleRecipeSelect} />
      <RecipeDetail recipe={selectedRecipe} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
