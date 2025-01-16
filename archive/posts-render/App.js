import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useEffect, useState} from "react";
import SinglePost from "./components/SinglePost";

function App() {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    })

    return (
        <div className="container">
            <div className="d-flex flex-wrap gap-1">
                {posts.map((post, index) =>
                    <SinglePost key={index} postInfo={post}/>
                )}
            </div>


        </div>
    );
}

export default App;
