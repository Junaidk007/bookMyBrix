import './hero.css';
import SearchBox from './SearchBox';

function Hero() {
    return ( 
        <div className="hero-container">
            <div className="shadow">
                <h1>Enjoy your dream vacation</h1>
                <p>Book home and stay packages at unbeatable prices</p>
            </div>
            <div className="search-container">
                <SearchBox />
            </div>

        </div>

     );
}

export default Hero;