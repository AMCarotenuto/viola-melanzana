import React from 'react';
import TopNavbar from "./components/TopNavbar";
import InputIngredients from "./components/InputIngredients";
import FilterRecipes from "./components/FilterRecipes";
import Footer from "./components/Footer";

export default function HomePage() {
    return (
        <div>
            <TopNavbar />
            <InputIngredients />
            <h1>QUI VANNO LE CARDS, IL FILTER E LE RICETTE </h1>
            <FilterRecipes />
            <Footer />
        </div>
    )
}
