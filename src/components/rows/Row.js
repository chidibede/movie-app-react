import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'
import { Div } from './RowStyles'


const Row = ({ title, fetchUrl }) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/original'
    const [movies, setMovies] = useState([])

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
            <h3>{title}</h3>
            <div className="imageRow">
                {movies.map((movie) => {
                    return (
                        <img className="image" key={movie.id} src={`${baseImageUrl}/${movie.poster_path}`} alt={movie.name} />
                    )
                })}
            </div>

        </Div>
    )
}

export default Row;