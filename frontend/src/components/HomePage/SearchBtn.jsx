import './searchBox.css'

function SearchBtn({setShowBox, showBox}) {
    return (
        <div className="search-btn position">
                <button type="button" onClick={() => setShowBox(!showBox)}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
    )
}

export default SearchBtn;