import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
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

                <Routes>
                    <Route path="/" element={<IndexPage/>}></Route>
                    <Route path="/gallery" element={<GalleryPage/>}></Route>
                    <Route path="/users" element={<UsersPage/>}></Route>
                    <Route path="/posts" element={<PostsPage/>}></Route>
                    <Route path="/comments" element={<CommentsPage/>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
