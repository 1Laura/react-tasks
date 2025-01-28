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
import UserPhotosPage from "./pages/UserPhotosPage";

function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <div>
                    <Routes>
                        <Route path="/" element={<UsersPage/>}></Route>
                        <Route path="/user/:userId" element={<SingleUserPage/>}></Route>
                        <Route path="/posts/:userId" element={<UserPostsPage/>}></Route>
                        <Route path="/post/:postId" element={<SinglePostPage/>}></Route>
                        <Route path="/albums/:userId" element={<UserAlbumsPage/>}></Route>
                        <Route path="/photos/:albumId" element={<UserPhotosPage/>}></Route>
                        <Route path="/todos/:userId" element={<UserTodosPage/>}></Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
