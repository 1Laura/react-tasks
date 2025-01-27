import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UsersPage from "./pages/UsersPage";
import SingleUserPage from "./pages/SingleUserPage";
import UserPostsPage from "./pages/UserPostsPage";
import UserAlbumsPage from "./pages/UserAlbumsPage";
import UserTodosPage from "./pages/UserTodosPage";
import SinglePostPage from "./pages/SinglePostPage";

function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<UsersPage/>}></Route>
                        <Route path="/user/:id" element={<SingleUserPage/>}></Route>
                        <Route path="/posts/:id" element={<UserPostsPage/>}></Route>
                        <Route path="/post/:id" element={<SinglePostPage/>}></Route>
                        <Route path="/albums/:id" element={<UserAlbumsPage/>}></Route>
                        <Route path="/todos/:id" element={<UserTodosPage/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
