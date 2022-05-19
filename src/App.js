// Components and Custom Components
import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

const App = () => {
  return (
    <div className="App">
      {/* Section list for basic Twitter website */}
      {/* Sidebar */}
      <Sidebar />
      {/* NewsFeed */}
      <Feed />
      {/* Widget */}
      <Widgets />
    </div>
  );
};
export default App;
