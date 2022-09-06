import Container from "../components/paulscomponents/Container";
import HomeComp from "../components/paulscomponents/HomeComp";
import { useRouter } from "next/router";
import { useState } from "react";

//home page
export default function Home() {
  const router = useRouter();
  const data = router.query;
  if (data.data) {
    const json = JSON.parse(data.data);
    console.log(json.data.data[0], "json at data");
    return (
      <div>
        <Container currentUser={json.data.data[0]} />
      </div>
    );
  } else {
    console.log("no data");
    return (
      <div>
        <Container currentUser={{}} />
      </div>
    );
  }
}
