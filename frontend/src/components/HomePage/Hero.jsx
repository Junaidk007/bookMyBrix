import './hero.css';
import SearchBox from './SearchBox';

function Hero() {
    return ( 
        <div className="hero-container">
            <div className="shadow">
                <h1 className="hero-title">Enjoy your dream vacation</h1>
                <p>Luxury stays curated for unforgettable experiences.</p>
            </div>
            <div className="search-container">
                <SearchBox />
            </div>

        </div>

     );
}

export default Hero;