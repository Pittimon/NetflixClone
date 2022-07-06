import React, { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import '../styles/Banner.css'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                data.data.results[Math.floor(Math.random() * data.data.results.length - 1)]
            );
            return data;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1 ) + "..." : str;

    }



  return (
    <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
    >  

        <div className="banner-con">
        <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btn-con">
            <button className="banner-btn">Play</button>
            <button className="banner-btn">MyList</button>
        </div>

            <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner-fadebottom"/>
    </header>
  )
}

export default Banner