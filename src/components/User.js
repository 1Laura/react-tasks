const User = ({photo, email, username, age, country, city}) => {
    return (

        <div className="render">
            <img src={photo} alt=""/>
            <p>{email}</p>
            <p>{username}</p>
            <p>{age}</p>
            <p>{country}</p>
            <p>{city}</p>
        </div>

    );
};

export default User;