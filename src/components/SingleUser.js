import {Link, useLocation, useNavigate} from "react-router-dom";

const SingleUser = ({userInfo}) => {
    const navigate = useNavigate();

    // function userNavigate() {
    //     navigate("/user/" + userInfo.id)
    // }

    return (
        <div className="card flex-wrap p-2">
            {/*<Link to={`/user/${userInfo.name}/${userInfo.id}/`}><h5>{userInfo.name}</h5></Link>*/}
            <h5 className="user-name" onClick={()=>navigate("/user/" + userInfo.id)}>{userInfo.name}</h5>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>City:</strong> {userInfo.address.city}</p>
            <p><strong>Company:</strong> {userInfo.company.name}</p>
            <a href={"https://" + userInfo.website} target="_blank">{userInfo.website}</a>
        </div>
    );
};

export default SingleUser;