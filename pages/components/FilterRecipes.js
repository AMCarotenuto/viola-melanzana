import React from 'react'
import {Dropdown, Button, ButtonGroup, SplitButton} from "react-bootstrap";

export default function FilterRecipes() {
    return (
      <div id="filter-bar">
        <Dropdown as={ButtonGroup}>

          <SplitButton menuAlign={{ lg: "left" }} title="FILTER SEARCH" id="dropdown-split-basic">
           
            <Dropdown.Item href="#/action-1">American recipes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Indian recipes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Italian recipes</Dropdown.Item>
          </SplitButton>
        </Dropdown>
      </div>
    );
}
