import React, { useState, useEffect } from 'react';
import './main poster.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay} from 'swiper/modules'; 

function MainPoster() {
  const [movie, setMovie] = useState([]);
  
  const [imageType, setImageType] = useState("backdrop_path"); 

  useEffect(() => {
  
    const checkScreenSize = () => {
      if(window.innerWidth < 768) {
        setImageType("poster_path"); 
      } else {
        setImageType("backdrop_path"); 
      }
    };

   
    checkScreenSize();

  
    window.addEventListener("resize", checkScreenSize);

    // 4. API Call
    async function fetchData() {
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=883bbc600df999c84c0b0ccc67ba071e");
        const data = await response.json();
        let movies = data.results;
        let x = Math.floor(Math.random()*movies.length)

        let temp = movies[0];
         movies[0] = movies[x];
         movies[x] = temp;
        setMovie(movies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

 
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
     <div className="main-container">
        <Swiper
          key={movie.length}
          modules={[Navigation, Autoplay]}
          onAfterInit={(swiper) => {
      swiper.autoplay.start();
  }}
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
                  src={`https://image.tmdb.org/t/p/original/${item[imageType]}`}
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