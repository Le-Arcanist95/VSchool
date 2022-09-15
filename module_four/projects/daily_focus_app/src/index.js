import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import TaskList from "./pages/TaskList";
import Task from "./pages/Task"
import "./index.scss";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />}/>
                <Route path="journal" element={<Journal />}/>
                <Route path="tasks" element={<TaskList />}>
                    <Route path=":taskId" element={<Task/>}/>
                </Route>
                <Route path="*" element={
                    <main style={{padding: "1em"}}>
                        <p>Oops! You've reached an empty page!</p>
                    </main>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
);