import React from "react";
import "./styles.css";
import EditProfile from "./EditProfile";

export default function App() {
  const formValues = {
    email: "magne@alvheim.com"
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <EditProfile
        formValues={formValues}
        updateUser={() => {}}
        createUser={() => {}}
      />
    </div>
  );
}
