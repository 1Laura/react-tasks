import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UserPostsPage from "./pages/UserPostsPage";
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {use, useState} from "react";
import PostCreatePage from "./pages/PostCreatePage";

function App() {

    const [secret, setSecret] = useState(null);

    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar secret={secret}/>

                <div>
                    <Routes>
                        <Route path="/" element={<IndexPage/>}></Route>
                        <Route path="/user/:username" element={<UserPostsPage/>}></Route>//username= params, naudoja ir logina pavadinima is cia
                        <Route path="/user/:username/:postId" element={<PostPage/>}></Route>
                        <Route path="/login" element={<LoginPage setSecret={setSecret}/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>
                        <Route path="/createpost" element={<PostCreatePage secret={secret}/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
