import React, { useState } from "react";
import Ingredients from "./Ingredients";
import { CardDeck, Card, Button } from "react-bootstrap";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from "react-share";

const Recipe = ({ recipe }) => {
  const { label, image, url, source, ingredients } = recipe.recipe;
  const [show, setShow] = useState(false);

  function addToFavourites() {
    const ingredientName = ingredients.map((h) => h.text);
    axios
      .post("http://localhost:3001/recipes", {
        label,
        image,
        url,
        source,
        ingredientName,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  return (
    <div className="recipe">
      <CardDeck>
        <Card className="text-center">
          <Card.Header>
            <h2>{label}</h2>
          </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={image} alt={label} />
            <br />

            <Button variant="primary" onClick={() => setShow(!show)}>
              Ingredients
            </Button>
            {show && <Ingredients ingredients={ingredients} />}
          </Card.Body>
          {/* <FbLike /> */}
          <Button
            onClick={() => {
              addToFavourites();
            }}
          >
            Add to favourites
          </Button>
          <Card.Footer className="text-muted">
            <a href={url}>Recipe from {source}</a>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Recipe;
