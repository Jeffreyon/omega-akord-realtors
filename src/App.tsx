import Index from "./pages/Index";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Auth from "./layouts/Auth";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route element={<Auth />}>
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/sign-in" element={<SignIn />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
