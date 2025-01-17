import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import GalleryPage from "./pages/GalleryPage";
import Toolbar from "./components/Toolbar";
import ProfilePage from "./pages/ProfilePage";


function App() {


    return (
        <div className="container-fluid">
            <BrowserRouter>

                <Toolbar/>

                <Routes>
                    <Route path="/" element={<IndexPage/>}></Route>
                    <Route path="/gallery" element={<GalleryPage/>}></Route>
                    <Route path="/profile" element={<ProfilePage/>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
