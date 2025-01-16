const SinglePost = ({postInfo}) => {

    return (
        <div className="card p-2">
            <h5>{postInfo.title}</h5>
            <p>{postInfo.body}</p>
        </div>
    );
};

export default SinglePost;