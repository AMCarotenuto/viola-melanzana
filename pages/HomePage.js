import React from "react";
import TopNavbar from "./components/TopNavbar";
import InputIngredients from "./components/InputIngredients";
import FilterRecipes from "./components/FilterRecipes";
import Footer from "./components/Footer";

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
        <h1>QUI VANNO LE CARDS, IL FILTER E LE RICETTE </h1>
        <FilterRecipes />
        <Footer />
      </div>
    </div>
  );
}
