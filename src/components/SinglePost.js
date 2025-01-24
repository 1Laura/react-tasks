import {Link, useLocation, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import React, {useEffect, useRef, useState} from "react";

const SinglePost = () => {
       return (
        <div className="card p-2" >
            <img src={postInfo.image} alt=""/>
            <Link to={`/user/${postInfo.username}/${postInfo.id}/`}><h5>{postInfo.title}</h5></Link>
            <p>{time}</p>
            <p>{postInfo.description}</p>
            <Link to={`/user/${postInfo.username}`}>{postInfo.username}</Link>

        </div>
    );
};

export default SinglePost;