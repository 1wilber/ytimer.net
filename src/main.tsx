import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./assets/main.css";

// fetch scramble on app load

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
