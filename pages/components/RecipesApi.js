import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./apiComponents/Recipe";
import { v4 as uuidv4 } from "uuid";

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
    <div className="api">
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Choose your ingredient"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}
