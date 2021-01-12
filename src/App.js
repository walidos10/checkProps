import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import imagePr from "./profile/1000.jpg";

function handleName(name) {
  return alert(name);
}
function App() {
  return (
    <div className="App">
      <Profile
        fullName="Attia Ghazi Walid"
        bio="study in go my code"
        profession="student"
        handel={handleName}
      >
        <img
          className="img-thumbnail"
          src={imagePr}
          alt="photo de profile"
          width={300}
          height={300}
        ></img>
      </Profile>
    </div>
  );
}

export default App;
