import React from 'react';
import { useState ,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Modules import karein (Arrows ke liye)
import { Navigation } from 'swiper/modules';

import './Row.css'; // Styling file

const Row = ({title}) => {
  
  const [movies, setMovies] = useState([]);
  const [result , setresult] = useState("");


  useEffect(() => {
  const search = [
  "Avengers", "Iron Man", "Spider-Man", "Thor", "Batman",
    "Superman", "Joker", "Hulk", "Harry Potter", "Matrix",
    "John Wick", "Fast and Furious", "Godzilla", "Kong"
  ]; 

  
    const random = search[Math.floor(Math.random() * search.length)];
    setresult(random);

    fetch(`https://www.omdbapi.com/?s=${random}&apikey=8feaad19`).then(res => res.json()).then(data => {
      if(data.Search){ setMovies(data.Search);}
    }).catch(error => console.log(error));

  },[]);

  return (
    <div className="row-container">
      <h2 className="row-title">{result}</h2>
      
      <Swiper
        modules={[Navigation]} // Arrows enable karne ke liye
        navigation={true} // Left-Right arrows dikhenge
        spaceBetween={10} // Images ke beech ka gap
        slidesPerView={5} // Ek baar me kitni movies dikhengi
        breakpoints={{
            // Mobile (choti screen) par sirf 2 dikhengi
            320: { slidesPerView: 2 },
            // Tablet par 3
            768: { slidesPerView: 3 },
            // Laptop par 5
            1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.imdbID}>
            <div className="movie-poster">
               <img 
                 src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/150x220?text=No+Image'} 
                 alt={movie.Title} 
               />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Row;