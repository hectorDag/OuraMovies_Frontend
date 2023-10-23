import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos necesarios
import MovieCard from '../components/MovieCard'; // Asegúrate de importar tu componente MovieCard

const Home = ({ movies }) => {
    // Asegúrate de que 'movies' es un array de objetos, cada uno representando una película
    // Esto podría venir de un estado de React o ser pasado como prop

    return (
        <div className="home-page">
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
            >
                {movies.map((movie, index) => (
                    <div key={index}>
                        <MovieCard movie={movie} />  {/* Aquí asumimos que tu MovieCard puede aceptar 'movie' como prop */}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
