import React from "react";
import "./styles.css";
import EditProfile from "./EditProfile";

export default function App() {
  const formValues = {
    concentUserName: "cc",
    emailConfirmed: true,
    extraInfo1: "EX1",
    extraInfo2: "Ex2",
    forening: "1",
    foreningsNavn: null,
    fullName: "Magne Karsten Alvheim",
    kreditorListe: [
      { kreditorId: "3", kreditorNavn: "Coach" },
      { kreditorId: "6", kreditorNavn: "Wild West Coffee" },
      { kreditorId: "11", kreditorNavn: "Adventure Camping" },
      { kreditorId: "36", kreditorNavn: "Head to Tail Pet Groomers" }
    ],
    kundeNavn: null,
    kundeNummer: "K3234235245",
    orgNummer: "987654321",
    rolle: "UserAdmin",
    username: "testuser1@uc.no"
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
