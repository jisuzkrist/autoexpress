// Libraries
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// (end of) Libraries

import { App } from "./App";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
}
