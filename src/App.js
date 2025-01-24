import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import IndexPage from "./pages/IndexPage";

function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<IndexPage/>}></Route>

                        {/*<Route*/}
                        {/*    path="/user/:username"*/}
                        {/*    element={<UserPostsPage username={username} secret={secret}/>}>*/}
                        {/*</Route>//username= params, naudoja ir logina pavadinima is cia*/}

                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
