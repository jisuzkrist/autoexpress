// Libraries
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// (end of) Libraries

import { App } from "./App";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
