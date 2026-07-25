import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./router/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);