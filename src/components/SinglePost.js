const SinglePost = ({postInfo, update}) => {
    function updateItem() {
        update(postInfo.title)//galima atlikti logika
    }

    return (
        <div className="card p-2">
            <h5>{postInfo.title}</h5>
            <p>{postInfo.body}</p>
            {/*<button onClick={()=>update(postInfo.title)}>Click</button>*/}
            <button onClick={updateItem}>Click</button>
        </div>
    );
};

export default SinglePost;