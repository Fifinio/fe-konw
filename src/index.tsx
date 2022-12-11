import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const authContext = React.createContext({
  isAuthorized: false,
  setIsAuthorized: (isAuthorized: boolean) => {
    isAuthorized = isAuthorized;
  },
});

root.render(
  <React.StrictMode>
    <authContext.Provider
      value={{ isAuthorized: false, setIsAuthorized: () => {} }}
    >
      <App />
    </authContext.Provider>
  </React.StrictMode>
);
