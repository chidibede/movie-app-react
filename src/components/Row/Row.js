import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../../utils/axios'
import { Div } from './RowStyles'
import movieTrailer from 'movie-trailer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Row = ({ title, fetchUrl, isLargeRow }) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const opts = {
        height: '290',
        width: '100%',
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

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchUrl);
            const data = response.data.results;
            setMovies(data)
            return data;
        }

        fetchData()
    }, [fetchUrl])

    return (
        <Div>
            <h3 className="row_title">{title}</h3>
            <div className="imageRow">
                {movies.map((movie) => {
                    return (
                        <img
                            className={`image ${isLargeRow && "imageLarge"}`}
                            key={movie.id}
                            src={isLargeRow ? `${baseImageUrl}/${movie.poster_path}` : `${baseImageUrl}/${movie.backdrop_path}`}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />

                    )
                })}
            </div>
            { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
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

        </Div>
    )
}

export default Row;