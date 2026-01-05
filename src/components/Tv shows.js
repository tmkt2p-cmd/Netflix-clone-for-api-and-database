import React from 'react';
import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
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
   <> 
     
    <div className="sldr"> 
   <h1 className="st">TV Shows</h1>  

        <div className="train">
               <Swiper
        modules={[Navigation]} // Arrows enable karne ke liye
        navigation={true} // Left-Right arrows dikhenge
        spaceBetween={10} // Images ke beech ka gap
        slidesPerView={5} // Ek baar me kitni movies dikhengi
        breakpoints={{
            // Mobile (choti screen) par sirf 2 dikhengi
            320: { slidesPerView: 2.5 },
            // Tablet par 3
            768: { slidesPerView: 3 },
            // Laptop par 5
            1024: { slidesPerView: 5 },
        }}
        className="mySwiper2"
      >

        {movie.map((movie) => (

            <SwiperSlide key={movie.id}>

                <div className="train">

                  <Link to="/Stream"   state={{  movieUrl:  `https://vidsrc.to/embed/tv/${movie.id}/1/1`}}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.name} className="img"  />
                </Link>
                </div>
             </SwiperSlide>
        ) )}   

        </Swiper>

        </div>
      
    </div>
    </>
  )
}

