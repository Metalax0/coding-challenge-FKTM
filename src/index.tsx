import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./StateManagement/Store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ConfigProvider
        theme={{
            components: {
                Table: {
                    rowHoverBg: "#7695f5",
                },
            },
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>
);
