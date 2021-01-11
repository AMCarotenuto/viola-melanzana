import React from 'react'
import {CardDeck, Card, Button } from "react-bootstrap";

export default function Cards() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="/gricia.jpg" />
            <Card.Body>
              <Card.Title>PASTA ALLA GRICIA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/pomodoro.jpg" />
            <Card.Body>
              <Card.Title>PASTA AL POMODORO</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="amatriciana.jpg" />
            <Card.Body>
              <Card.Title>PASTA ALL'AMATRICIANA</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
}
