import React from "react";
import TopNavbar from "./components/TopNavbar";

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
      <h1>QUI VA IL CALENDARIO</h1>
    </div>
  );
}
