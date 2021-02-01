import React from "react";
import Article from "./Article";
import Comment from "./Comment";

function App() {  // App is the parent cmponent of Article and Comment, Article and Comment are child componets of App.
  return (
    <div>
      <Article /> 
      <Comment />
    </div>
  );
}

export default App;
