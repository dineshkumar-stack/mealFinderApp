import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { HiOutlineViewList } from 'react-icons/hi';
import "../App.css"

const RecipeList = ({ recipes, onRecipeSelect }) => {


  return (
    <div className="body-container container">
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-4" key={recipe.idMeal}>
            <div className="card">
              <img
                src={recipe.strMealThumb}
                className="card-img-top card__thumb"
                alt={recipe.strMeal}
              />
              <div className="card-body card__body">
                <h5 className="card-title card__title">{recipe.strMeal}</h5>
                <div className="card__description">
                <p class="label label-primary"> {recipe.strCategory}</p>
                <button
                  className="btn btn-light"
                  size="sm"
                  onClick={() => onRecipeSelect(recipe)}
                >
                  <HiOutlineViewList style={{ marginBottom: "2px" }} /> View Details
                </button></div>
                <a href={recipe.strYoutube}><button className="btn btn-dark"><AiFillYoutube style={{ marginBottom: "2px" }} /> Watch Video</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
