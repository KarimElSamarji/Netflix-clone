import React from 'react';
import "./HomeScreen.css";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Row from "../Components/Row";
import requests from '../Request';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <NavBar />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row
                title='Trending Now'
                fetchURL={requests. fetchTrending}
            />

            <Row
                title='Top Rated'
                fetchURL={requests.fetchTopRated}
            />

            <Row
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            />
            <Row
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            />
            <Row
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies}
            />
            <Row
                title='Romance Movies'
                fetchURL={requests.fetchRomanticMovies}
            />
            <Row
                title='Documentaries Movies'
                fetchURL={requests.fetchDocumentaries}
            />



        </div>
    )
}

export default HomeScreen
