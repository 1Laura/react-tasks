import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/https";

const UserPhotosPage = () => {
    const {albumId} = useParams();
    const [userPhotos, setUserPhotos] = useState([]);

    useEffect(() => {
        http(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(data => {
                console.log(data)
                setUserPhotos(data)
            })
    }, []);


    return (
        <div className="container flex-wrap m-2 p-2">
            {userPhotos.map((userPhoto, index) =>
                <img className="m-2 p-2" key={userPhoto.id} src={`https://picsum.photos/200/300?random=${index}`} alt=""/>
                )}
        </div>
    );
};

export default UserPhotosPage;