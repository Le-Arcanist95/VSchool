import React from "react";
import { createRoot } from "react-dom/client";
import { 
    createBrowserRouter, 
    createRoutesFromElements,
    RouterProvider, 
    Route 
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Journal from "./routes/Journal";
import TaskList from "./routes/TaskList";
import Task from "./routes/Task"
import "./index.scss";

const root = createRoot(document.getElementById("root"));
const router = createBrowserRouter(
    createRoutesFromElements(
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
    )
);

root.render(
    <RouterProvider router={ router } />
)