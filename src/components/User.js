const User = (props) => {
    return (

        <div className="render">
            <img src={props.photo} alt=""/>
            <p>{props.email}</p>
            <p>{props.username}</p>
            <p>{props.age}</p>
            <p>{props.country}</p>
            <p>{props.city}</p>
        </div>

    );
};

export default User;