import React, {useEffect, useState} from 'react';
import SinglePhoto from "../components/SinglePhoto";

const GalleryPage = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => {

                let result = [];
                for (let i = 0; i < 100; i++) {
                    result.push(data[i])
                }
                setPhotos(result);
            })
    }, [])


    return (
        <div className="container d-flex flex-wrap gap-2">
            {photos.slice(0, 30).map((photo, index) =>
                <SinglePhoto key={index} photoInfo={photo}/>
            )}
        </div>
    );
};

export default GalleryPage;