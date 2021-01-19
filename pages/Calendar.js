import React from "react";
import TopNavbar from "./components/TopNavbar";
import MealsPlanner from './components/MealsPlanner'
import Footer from "./components/Footer";
import { useSession } from "next-auth/client";
import { useEffect } from "react";
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

export default function Calendar() {
    return (
        <div>
       <div>{loginCheck()}</div>
            <TopNavbar />
            <MealsPlanner />
            <Footer />
        </div>
    )
}
