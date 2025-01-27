import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../plugins/https";
import SingleAlbums from "../components/SingleAlbums";

const UserAlbumsPage = ({userAlbumsInfo}) => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        http("https://jsonplaceholder.typicode.com/albums?userId=" + id)
            .then(data => {
                console.log(data)
                setAlbums(data)
            })
    }, []);

    return (
        <div className="container d-flex flex-wrap gap-2">
            {albums.map(album =>
                <SingleAlbums key={album.id} userAlbumsInfo={album}/>
            )}
        </div>
    );
};

export default UserAlbumsPage;