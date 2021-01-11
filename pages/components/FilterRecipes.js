import React from 'react'
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";

export default function FilterRecipes() {
    return (
      <div id="filter-bar">
        <Dropdown as={ButtonGroup}>
          <Button variant="primary">FILTER SEARCH</Button>

          <Dropdown.Toggle  id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">American recipes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Indian recipes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Italian recipes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
}
