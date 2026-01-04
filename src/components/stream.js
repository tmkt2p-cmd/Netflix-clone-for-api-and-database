import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './stream.css'

function Stream () {

    const location = useLocation ();
    const navigate = useNavigate ();

    const movieUrl = location.state?.movieUrl;

    return(
        <div className="player-wrapper">

            <button className="back-btn" onClick={ () => navigate(-1)}>GO-back</button>

        {/* <video
        className="video-screen"
        controls
        autoplay
        width="100%"
        height="100%"
        >
            <source src={movieUrl} type="video/mp4" />
            
        </video> */}

        <iframe 
    title="Video Stream Player"
    className="video-screen" 
    src={movieUrl} 
    allowFullScreen={true}
    frameBorder="0"
    scrolling="no"
    allow="autoplay; encrypted-media; picture-in-picture"
></iframe>

        </div>

    );
}
export default Stream;
