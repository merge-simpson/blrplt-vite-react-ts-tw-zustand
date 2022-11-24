import MultiToastProvider from "@utils/common/toast/MultiToastProvider";
import ToastProvider from "@utils/common/toast/ToastProvider";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ToastProvider>
      <MultiToastProvider>
        <App />
      </MultiToastProvider>
    </ToastProvider>
  </BrowserRouter>
);
