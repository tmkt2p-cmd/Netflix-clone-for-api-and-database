import React from 'react';
import {useState, useEffect} from 'react';
import './Tv shows.css';

export default function  Shows () {

  const [movie, setmovie] = useState([]);

    const api = async () => {
        // API call logic here
        try {
          const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=883bbc600df999c84c0b0ccc67ba071e");
          const data = await response.json();
          setmovie(data.results);

        }catch(err){
          console.log("erro hia bhai");
        }
    }

    useEffect (() => {
        api();
    },[]);

  return (
    <div className="tp">
      <h1 className="st">TV Shows</h1>  
    <div className="slider"> 
  

        <div className="train">

        {movie.map((movie) => (

          
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} className="img"  />
         
        
        ) )}   

        </div>
      
    </div>
    </div>
  )
}

