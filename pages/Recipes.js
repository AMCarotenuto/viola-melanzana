import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import TopNavbar from "./components/TopNavbar";
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

export default function Recipes() {
  return (
    <div>
      <div>{loginCheck()}</div>
      <TopNavbar />
      <h1>QUI VANNO IL FILTER E LE RICETTE</h1>
      <Footer />
    </div>
  );
}
