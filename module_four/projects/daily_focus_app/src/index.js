import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Tasks from "./pages/Tasks";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />}/>
                <Route path="journal" element={<Journal />}/>
                <Route path="tasks" element={<Tasks />}/>
                <Route path="*" element={
                    <main style={{padding: "1em"}}>
                        <p>Oops! You've reached an empty page!</p>
                    </main>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
);