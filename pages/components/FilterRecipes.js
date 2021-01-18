import React from "react";
import { Dropdown, ButtonGroup, SplitButton } from "react-bootstrap";

export default function FilterRecipes({ result }) {
  return (
    <div id="filter-bar">
      <Dropdown as={ButtonGroup}>
        <SplitButton
          menuAlign={{ lg: "left" }}
          title="FILTER SEARCH"
          id="dropdown-split-basic"
        >
          <Dropdown.Item
            onSelect={result.filter((r) => r.data.hits.recipe.healthlabels)}
          >
            Vegan
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Vegeterian</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Palo</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Dairy-free</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Gluten-free</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Wheat-free</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Low-sugar</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-3">Egg-free</Dropdown.Item>
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
  );
}
