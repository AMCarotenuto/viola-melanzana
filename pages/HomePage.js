import React, { useEffect } from "react";
import TopNavbar from "./components/TopNavbar";
import InputIngredients from "./components/InputIngredients";
import FilterRecipes from "./components/FilterRecipes";
import Footer from "./components/Footer";
import Cards from './components/Cards';
import {Row, Col, Image} from 'react-bootstrap'
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";

function loginCheck() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/");
    }
  }, [session, loading]);
}

export default function HomePage() {

    return (
      <div>
        <div>{loginCheck()}</div>
        <TopNavbar />
        <div className="main-homePage">
          <br />
          <InputIngredients />
          <br />
          <Col xs={6} md={4}>
            <button className="button-image">
              <Image src="pomodoro.jpg" thumbnail />
            </button>
          </Col>
          <FilterRecipes />
          <br />
          <Cards />
          <Footer />
        </div>
      </div>
    );
}
