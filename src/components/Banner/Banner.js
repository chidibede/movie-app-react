import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import { BannerDiv } from './BannerStyles'
import { truncateString } from '../../utils/functions'
import movieTrailer from 'movie-trailer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Youtube from 'react-youtube'

const Banner = ({ fetchUrl }) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original'
    const [movie, setMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const opts = {
        height: '290',
        width: '50%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || "" || movie?.title || movie?.original_name)
                .then(url => {
                    let urlQuery = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlQuery.get('v'))

                })
                .catch(err => toast.error(`Couldn't locate the trailer for ${movie.name}`), {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
        }
    }

    const closeMovie = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            const data = response.data.results;
            const randomMovie = data[Math.floor(Math.random() * data.length - 1)]
            setMovie(randomMovie)
            return randomMovie;
        }

        fetchData()
    }, [fetchUrl])

    return (

        <BannerDiv style={{
            marginTop: "0",
            backgroundSize: "cover",
            height: "60vh",
            backgroundImage: `url(${baseImageUrl}${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}
            onClick={() => closeMovie(movie)}
        >
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="banner_contents">
                <h2 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h2>
                <p>{truncateString(movie?.overview, 200)}</p>
                <span>
                    <button className="banner_buttons" onClick={() => handleClick(movie)}>Play Trailer</button>
                    <button className="banner_buttons">Details</button>
                </span>
            </div>
            <div className="banner_fade"></div>
        </BannerDiv>
    )
}

export default Banner;