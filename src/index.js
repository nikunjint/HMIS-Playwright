import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import { store ,persistor} from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import logo from "./assets/loader.gif";
import "antd/dist/reset.css";
import "./style/antd.css";
import "./style/main.css";
import "./index.css";
import 'tailwindcss/tailwind.css';
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/Store";

const App = lazy(() => import('./App'));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback={<img src={logo} className="m-auto flex h-screen w-52 items-center object-contain" alt="Loading" />}>
      <Provider store={store}>
      <PersistGate loading={<img src={logo} className="m-auto flex h-screen w-52 items-center object-contain" alt="Loading" />} persistor={persistor}>
      <App />

      </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
