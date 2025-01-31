import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Toolbar from "./components/Toolbar";
import UserPostsPage from "./pages/UserPostsPage";
import IndexPage from "./pages/IndexPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostCreatePage from "./pages/PostCreatePage";

function App() {
    const [secret, setSecret] = useState(null);
    const [username, setUsername] = useState(null);

    function setLogin(secretKey, username) {
        setSecret(secretKey);
        setUsername(username)
    }

    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar secret={secret}/>

                <div>
                    <Routes>
                        <Route path="/" element={<IndexPage username={username} secret={secret}/>}></Route>

                        <Route path="/user/:username" element={<UserPostsPage username={username} secret={secret}/>} ></Route>//username= params, naudoja ir logina pavadinima is cia
                        <Route path="/user/:username/:postId" element={<PostPage username={username} secret={secret}/>}></Route>

                        <Route path="/login" element={<LoginPage setLogin={setLogin}/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>

                        <Route path="/createpost" element={<PostCreatePage secret={secret}/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
