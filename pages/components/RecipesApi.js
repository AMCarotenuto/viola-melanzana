import React, { useState } from "react";
import axios from "axios";
import Recipe from "./apiComponents/Recipe";
import { v4 as uuidv4 } from "uuid";
import { Dropdown, ButtonGroup, SplitButton } from "react-bootstrap";

export default function RecipesApi() {
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState([]);

  const APP_ID = "cd031e0c";
  const APP_KEY = "530d7bfa70fdc10559f377c561636888";
  const url = `https://api.edamam.com/search?q=${query1}+${query2}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  const getData = async (peppo) => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setHealthLabels(result.data.hits.map((h) => h.recipe));
    //healthLabels.map((r) => r.healthLabels);
    //healthLabels.includes(peppo);
    console.log(healthLabels);
    setQuery1("");
    setQuery2("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };


  const onChange1 = (e) => {
    setQuery1(e.target.value);
  };
  const onChange2 = (e) => {
    setQuery2(e.target.value);

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
          onChange={onChange1}
          value={query1}
        />
        <input
          type="text"
          placeholder="Choose your ingredient"
          autoComplete="off"
          onChange={onChange2}
          value={query2}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        <div id="filter-bar">
          <Dropdown as={ButtonGroup}>
            <SplitButton
              menuAlign={{ lg: "left" }}
              title="FILTER SEARCH"
              id="dropdown-split-basic"
            >
              <Dropdown.Item
                onClick={() => {
                  const hlMap = healthLabels.map((r) => r.healthLabels);
                  const hlFilter = hlMap.filter(
                    (r) => r.healthLabels === "Dairy-free"
                  );
                  console.log(hlFilter);
                  console.log(hlMap);
                }}
              >
                Dairy-free
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  //const hlMap = healthLabels.map((r) => r.healthLabels);
                  // const hlFilter = hlMap.filter(
                  //   (r) => r.healthLabels === "Egg-free"
                  // );
                  // console.log(hlFilter);
                  // console.log(hlMap);

                  // var hlFilter = healthLabels.filter(function (r) {
                  //   return r.healthLabels === "Egg-free";
                  // });

                  // const hlFilter = healthLabels.forEach((element) => {
                  //   return element.healthLabels == "Vegan";
                  // });

                  //   const hlFilter = recipes.filter( function(healthLabels){
                  //     healthLabels.filter( function(d){
                  //       if (d.healthLabels === "Vegan"){
                  //         result = d;
                  //       }
                  //     }
                  //       )
                  //   }); console.log (d);

                  // const hlForEach = healthLabels.forEach((element) => {
                  //   if (element === "Vegan") {
                  //     console.log(element)
                  //   }
                  // }); 
                }}
              >
                Egg-free
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  const hlMap = healthLabels.map((r) => r.healthLabels);
                  const hlFilter = hlMap.filter(
                    (r) => r.healthLabels === "Palo"
                  );
                  console.log(hlFilter);
                  console.log(hlMap);
                }}
              >
                Palo
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  const hlMap = healthLabels.map((r) => r.healthLabels);
                  const hlFilter = hlMap.filter((r) => {
                    return r.healthLabels === "Vegan";
                  });
                  console.log(hlFilter);
                  console.log(hlMap);
                }}
              >
                Vegan
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Gluten-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Wheat-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Low-sugar</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Vegeterian</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Peanut-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Tree-nut-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Soy-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Fish-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Shellfish-free</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Fat-free</Dropdown.Item>
            </SplitButton>
          </Dropdown>
        </div>
        {recipes.map((recipe) => (
          <Recipe key={uuidv4()} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
