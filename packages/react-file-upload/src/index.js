import React from "react";
import ReactDOM from "react-dom";
import FileUpload from "./FileUpload";

import "./styles.css";

function App() {
  return <FileUpload />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
