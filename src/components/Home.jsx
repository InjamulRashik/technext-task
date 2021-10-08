import React from "react";

const Home = (props) => {
  const { mission_name } = props.data;
  return (
    <div>
      <h1>{mission_name}</h1>
    </div>
  );
};

export default Home;
