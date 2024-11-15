import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WeatherProvider from "./Context/WeatherContext.jsx";
import InputProvider from "./Context/InputContext.jsx";
import LoadingProvider from "./Context/loadingContext.jsx";
import DarkModeProivder from "./Context/darkmodeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProivder>
    <LoadingProvider>
      <WeatherProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </WeatherProvider>
    </LoadingProvider>
    </DarkModeProivder>
  </StrictMode>
);
