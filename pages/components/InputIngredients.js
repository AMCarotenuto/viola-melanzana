import React, { Fragment, useEffect, useState } from "react";

// const searchBar = document.getElementById("searchBar-ingredients");

// searchBar.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();

//   const filteredIngredients = ingredients.filter((ingredient_name) => {
//     return ingredient_name.toLowerCase().includes(searchString);
//   });
//   displayIngredients(filteredIngredients);
// });

// const loadIngredients = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/ingredient");
//     ingredients = await res.json();
//   } catch (err) {
//     console.error(err);
//   }
const inputIngredients = () => {
  useEffect(() => {
    const searchBar = document.getElementById("searchBar-ingredients");
    let ingredient = [];
    searchBar.addEventListener("keyup", (e) => {
      const searchString = e.target.value.toLowerCase();

      const filteredIngredients = ingredient.filter((ingredient_name) => {
        return ingredient_name.toLowerCase().includes(searchString);
      });
      // displayIngredients(filteredIngredients);
    });
  }, []);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/ingredients");
      const ingredient = await res.json();
      console.log(ingredient.records);
      const {
        records: { fields },
      } = ingredient;
      console.log(ingredient);
    } catch (err) {
      console.error(err);
    }
  };
  const [ingredient, setingredient] = useState("");
  return (
    <div id="searchBar-ingredients">
      <Fragment>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setingredient(e.target.value)}
            placeholder="CHOOSE YOUR INGREDIENTS"
          ></input>
          <button className="button-ingredients">SEARCH</button>
        </form>
      </Fragment>
    </div>
  );
};

export default inputIngredients;
