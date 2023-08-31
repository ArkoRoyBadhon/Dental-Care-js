import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./Router/routes";
import { PersistGate } from "redux-persist/integration/react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
