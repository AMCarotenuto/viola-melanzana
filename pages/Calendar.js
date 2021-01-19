import React from "react";
import TopNavbar from "./components/TopNavbar";
import MealsPlanner from "./components/MealsPlanner";
import Footer from "./components/Footer";
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function loginCheck() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/");
    }
  }, [session, loading]);
}

export default function Calendar() {
  const [favourites, setFavourites] = useState([]);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("http://localhost:3001/recipes");
      setFavourites(await res.data.records.map((r) => r.fields));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(async () => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <div>{loginCheck()}</div>
      <TopNavbar />
      <MealsPlanner />
      <Footer />
    </div>
  );
}
