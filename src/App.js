import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<LoginPage/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>


                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
