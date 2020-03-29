import React from "react";
import "./styles.css";
import Logos from "./components/logos";
import Onoma from "./components/onoma";
import Addres from "./components/addres";

export default function App() {
  return (
    <div className="App">
      <h1>Corona SMS Greece</h1>
      <h2>Prepare SMS for Lockdown Information</h2>
      <Logos />
      <Onoma />
      <Addres />
    </div>
  );
}
