import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UsersPage from "./pages/UsersPage";
import SingleUserPage from "./pages/SingleUserPage";

function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<UsersPage/>}></Route>
                        <Route path="/user/:id" element={<SingleUserPage/>}></Route>

                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
