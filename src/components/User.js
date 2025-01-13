const User = (props) => {
    return (
        <div>
            <div className="color-box" style={{backgroundColor: props.color}}>
                <p>{props.colorName}</p>
            </div>
        </div>
    );
};

export default User;