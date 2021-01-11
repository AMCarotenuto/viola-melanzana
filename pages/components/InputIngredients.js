import React, { Fragment, useState } from "react";

const inputIngredients = () => {
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { ingredient };
      const response = await fetch("http://localhost:3001/ingredient", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      //window.ingredient = "/CreateNewTrip";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [ingredient, setingredient] = useState("");
  return (
    <div id="searchBar-ingredients">
      <Fragment>
        <form  onSubmit={onSubmitForm}>
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
