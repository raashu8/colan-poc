import React from "react";
import router from "next/router";

function Home() {
  React.useEffect(() => {
    router.push("/auth/login");
  }, []);
  return <></>;
}

export default Home;
