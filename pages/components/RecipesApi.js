import React, { useState } from "react";
import axios from "axios";
import Recipe from "./apiComponents/Recipe";
import { v4 as uuidv4 } from "uuid";

export default function RecipesApi() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "cd031e0c";
  const APP_KEY = "530d7bfa70fdc10559f377c561636888";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await axios.get(url);
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
    {
      (event) => fetchIngredients(event);
    }
  };
  function fetchIngredients(data) {
    axios
      .get("http://localhost:3001/ingredients")
      .then((res) => {
        // console.log(JSON.stringify(res.data));
        setIngredient(res.data.records.map((r) => r.fields));
        ingredient.filter((f) =>
          f.ingredient_name.toLowerCase().includes(data)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const [ingredient, setIngredient] = useState([]);
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
