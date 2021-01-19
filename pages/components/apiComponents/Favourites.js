import React, { useState } from "react";
import Ingredients from "./Ingredients";
import FbLike from "../FbLikeButton";
import { CardDeck, Card, Button } from "react-bootstrap";
import axios from "axios";

const Favourites = ({ recipe }) => {
  const { label, image, url, source, ingredients } = recipe;
  const [show, setShow] = useState(false);

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
          <Card.Footer className="text-muted">
            <a href={url}>Recipe from {source}</a>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Favourites;
