import './searchBox.css';

function SearchBox() {
    return ( 
        <div className="search-box">
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder='Where are you going?' disabled/>
            </div>
            <div>
                <div>Check In</div>
                <div className="addDate"></div>
                <input type="date" id="check-in"  hidden />
            </div>
            <div>
                <div>Check Out</div>
                <div className="addDate"></div>
                <input type="date" id="check-out" hidden/>
            </div>
            <div className="search-btn">
                <button type="button" disabled>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
     );
}

export default SearchBox;