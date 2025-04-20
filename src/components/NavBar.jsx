import React from "react";

const NavBar = () => {
  const title = "Fat";
  const random = "EIEI";
  return (
    <>
      <h1>hello world</h1>
      <h2>{title}</h2>
      <h1>{`${title} ${random}`}</h1>
      <h1 style={{ color: "darkolivegreen", fontSize: "3rem" }}> {title}</h1>
    </>
  );
};

export default NavBar;
