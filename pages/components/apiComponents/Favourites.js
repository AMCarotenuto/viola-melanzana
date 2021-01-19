import React, { useState } from "react";
import Ingredients from "./Ingredients";
import FbLike from "../FbLikeButton";
import { CardDeck, Card, Button } from "react-bootstrap";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from "react-share";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Favourites = ({ recipe }) => {
  const { label, image, url, source, ingredients } = recipe;
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  function calendarDate(date) {
    axios
      .post("http://localhost:3001/recipes", {
        date,
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
            <br></br>
            <FacebookShareButton
              url={url}
              quote={label}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => calendarDate(date)}
              
            />
          </Card.Body>
          <Card.Footer className="text-muted">
            <a href={url}>Recipe from {source}</a>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Favourites;
