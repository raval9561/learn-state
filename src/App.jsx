import { useState } from "react";
import PlayingWithArrays from "./PlayingWithArrays";
const App = () => {


    const [message, setMessage] = useState("Hello, World!");
    const [user, setUser] = useState({
      name: "John",
      Class: "CWEB 602",
      location: "saskpolytech"
    });
    return (
      <>
      <p>{message}</p>
      <input type="button" onClick={()=>{setMessage(prompt("Hello, React!"));
      }}/>
      <p>{user.name}works at {user.location}where they are 
      teaching {user.Class}
       </p>
        <PlayingWithArrays/>
      </>  
    );
  
};

export default App;
