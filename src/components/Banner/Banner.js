import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import { BannerDiv } from './BannerStyles'
import { truncateString } from '../../utils/functions'

const Banner = ({ fetchUrl }) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original'
    const [movie, setMovie] = useState([])


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
        <BannerDiv>
            <header className="banner"
                style={{
                    marginTop: "0",
                    backgroundSize: "cover",
                    height: "60vh",
                    backgroundImage: `url(${baseImageUrl}${movie?.backdrop_path})`,
                    backgroundPosition: "center center"
                }}>
                <div className="banner_contents">
                    <h2 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h2>
                    <p>{truncateString(movie?.overview, 300)}</p>
                    <span>
                        <button className="banner_buttons">Play Trailer</button>
                        <button className="banner_buttons">Details</button>
                    </span>
                </div>
            </header>
        </BannerDiv>
    )
}

export default Banner;