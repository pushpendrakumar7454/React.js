import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./router/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes /><ToastContainer />
  </Provider>
);