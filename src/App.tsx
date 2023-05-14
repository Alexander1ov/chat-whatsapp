import React from "react";
import Chat from "./Components/Chat/Chat";
import Entrance from "./Components/Entrance/Entrance";
import { useAppSelector } from "./hooks/hooks";
import { log } from "console";
import Users from "./Components/Users/Users";

function App() {
  const { entrance } = useAppSelector((state) => state.chat);

  return (
    <div className="app">
      {/* {entrance && <Entrance />} */}
      <Users/>
      <Chat />
    </div>
  );
}

export default App;
