import React from "react";
import TopNavbar from "./components/TopNavbar";
import InputIngredients from "./components/InputIngredients";
import FilterRecipes from "./components/FilterRecipes";
import Footer from "./components/Footer";
import Cards from './components/Cards';
import {Row, Col, Image} from 'react-bootstrap'

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
          <h1>QUI VANNO LE FOTO DEGLI INGREDIENTI </h1>
          <FilterRecipes />
          <br />
          <Cards />
          <Footer />
        </div>
      </div>
    );
}
