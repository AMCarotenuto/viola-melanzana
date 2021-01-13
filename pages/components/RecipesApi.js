import React, { useState } from "react";
import Axios from "axios";

export default function RecipesApi() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "cd031e0c";
  const APP_KEY = "530d7bfa70fdc10559f377c561636888";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="CHOOSE YOUR INGREDIENT"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <h2>{recipe.recipe.label}</h2>)}
      </div>
    </div>
  );
}
