import React from "react";
import useFetch from "../../Hooks/useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data);

  return (
    <>
      <section>jsx</section>
    </>
  );
};

export default Home;
