import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import Toolbar from "./components/Toolbar";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";


function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Toolbar/>
                <div>
                    <Routes>
                        <Route path="/" element={<PostsPage/>}></Route>
                        <Route path="/gallery" element={<GalleryPage/>}></Route>
                        <Route path="/users" element={<UsersPage/>}></Route>
                        <Route path="/posts" element={<PostsPage/>}></Route>
                        <Route path="/comments" element={<CommentsPage/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
