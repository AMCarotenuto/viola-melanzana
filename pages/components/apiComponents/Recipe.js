import React, {useState} from "react";
import Ingredients from "./Ingredients";
import {CardDeck, Card, Button } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  const { label, image, url, source, ingredients } = recipe.recipe;
  const [show, setShow] = useState(false);

  return (
    <div className="recipe">
        <CardDeck>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} alt={label} />
          <Card.Body>
            <Card.Title>
              <h2>{label}</h2>
            </Card.Title>
            <Card.Text>
              <a href={url}>Recipe from {source}</a>
            </Card.Text>
            <Button variant="primary" onClick={() => setShow(!show)}>
              Ingredients
            </Button>
            {show && <Ingredients ingredients={ingredients} />}
          </Card.Body>
        </Card>
        </CardDeck>
    </div>
  );
};

export default Recipe;