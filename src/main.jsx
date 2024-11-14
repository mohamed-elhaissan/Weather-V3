import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WeatherProvider from "./Context/WeatherContext.jsx";
import InputProvider from "./Context/InputContext.jsx";
import LoadingProvider from "./Context/loadingContext.jsx";
import MouseProvider from "./Context/mouseMoveContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MouseProvider>
    <LoadingProvider>
      <WeatherProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </WeatherProvider>
    </LoadingProvider>
    </MouseProvider>
  </StrictMode>
);
