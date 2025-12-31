import React, { useState, useEffect } from 'react';
import './main poster.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// INHE UNCOMMENT KARNA ZARURI HAI
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay} from 'swiper/modules'; 

function MainPoster() {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=883bbc600df999c84c0b0ccc67ba071e");
        const data = await response.json();
        setMovie(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
     <div className="main-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {movie.map((item) => ( 
            <SwiperSlide key={item.id}>
              <div className="poster-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                  className="train-image"
                />
    
                <div className="content-overlay">
                  <h1 className="train-title">{item.title}</h1>  
                  <p className="train-overview">{item.overview}</p>
                  <button className="train-btn">PLAY NOW</button>
                  <button className="train-btn2">WATCH TRAILER</button>
                </div>
              </div>        
            </SwiperSlide>
          ))}
        </Swiper>
    </div> 
  );
}

export default MainPoster;