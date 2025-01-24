import {Link, useLocation, useNavigate} from "react-router-dom";

const SingleUser = ({userInfo}) => {
    const navigate = useNavigate();

    function userNavigate() {

    }

    return (
        <div className="card flex-wrap p-2">
            {/*<Link to={`/user/${userInfo.name}/${userInfo.id}/`}><h5>{userInfo.name}</h5></Link>*/}
            <h5 onClick={userNavigate}>{userInfo.name}</h5>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>City:</strong> {userInfo.address.city}</p>
            <p><strong>Company:</strong> {userInfo.company.name}</p>
            <a href={userInfo.website}>{userInfo.website}</a>
        </div>
    );
};

export default SingleUser;