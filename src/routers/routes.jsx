import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Login, Home } from "../index";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}