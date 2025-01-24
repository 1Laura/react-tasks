import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import React, {useEffect, useRef, useState} from "react";

const SinglePost = ({userInfo}) => {
    return (
        <div className="card flex-wrap p-2">
            <Link to={`/user/${userInfo.name}/${userInfo.id}/`}><h5>{userInfo.name}</h5></Link>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Phone:</strong> {userInfo.phone}</p>
            <p><strong>City:</strong> {userInfo.address.city}</p>
            <p><strong>WEB:</strong> {userInfo.website}</p>
            <p><strong>Company:</strong> {userInfo.company.name}</p>
        </div>
    );
};

export default SinglePost;