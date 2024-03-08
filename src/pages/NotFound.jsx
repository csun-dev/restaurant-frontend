import React from "react";
import Header from "./components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <h1
        style={{
          color: "black",
          fontSize: "42px",
          fontWeight: "800",
          textAlign: "center",
          marginTop: "10%",
        }}
      >
        404 - Not Found
      </h1>
    </>
  );
}

export default NotFound;
