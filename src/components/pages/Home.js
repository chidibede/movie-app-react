import React from 'react'
import styled from 'styled-components'
import requests from '../../utils/requests'
import Row from '../rows/Row'

const Div = styled.div`
    padding: 10px;
`
const Home = () => {
    return (
        <Div>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
            <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
            <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
        </Div>
    )
}

export default Home