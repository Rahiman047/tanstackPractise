import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "./customFetch";
import GetEmployee from "./GetEmployee";

function App() {
  return (
    <>
      <h1>Employee's List</h1>
      <form onSubmit={userSubmitted}>
        <label>Name : </label>
        <input type="text" />
        <div>
          <button
            type="button"
            style={{ marginTop: "5px", marginLeft: "12px" }}
          >
            Click to add
          </button>
        </div>
      </form>
      <GetEmployee />
    </>
  );
}

export default App;
