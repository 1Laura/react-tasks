import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useEffect, useState} from "react";
import SinglePost from "./components/SinglePost";

function App() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState(""); // State for the title

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [])

    function updateTitle(data) {
        setTitle(data);
    }

    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="d-flex flex-wrap gap-1">
                {posts.map((post, index) =>
                    <SinglePost key={index} postInfo={post} update={updateTitle}/>
                )}
            </div>


        </div>
    );
}

export default App;
