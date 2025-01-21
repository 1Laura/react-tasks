import {Link} from "react-router-dom";

const SinglePost = ({postInfo}) => {
    // const time = new Date(postInfo.timestamp).toLocaleString();

    return (
        <div className="card p-2" key={postInfo.id}>
            <img src={postInfo.image} alt=""/>
            <Link to={`/user/${postInfo.username}/${postInfo.id}/`}><h5>{postInfo.title}, {postInfo.timestamp}</h5></Link>
            <p>{postInfo.description}</p>
            <Link to={`/user/${postInfo.username}`}>{postInfo.username}</Link>
        </div>
    );
};

export default SinglePost;