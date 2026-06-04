import './card.css'

function ListingCard({ imgURl, title, price, rating, id }) {
    // Generate a description dynamically incorporating the price to fill the space like the mockup
    const description = `Elegant property featuring premium comfort, modern styling & convenient access starting at ₹${price}/night.`;

    return (
        <div className="card-container">
            <div className="card-image-wrapper">
                <img src={`${imgURl}?w=400&auto=format&fit=crop&q=75`} alt={title} className="card-image" />
            </div>

            <div className="card-info">
                <div className="card-title-row">
                    <h3 className="card-title">{title}</h3>
                </div>
                <div className="card-footer">
                    <div className="card-stats">
                        <div className="stat-item" title="Rating">
                            <i className="fa-solid fa-star star"></i>
                            <span className="stat-value">{rating}</span>
                        </div>
                    </div>
                    
                    <button className="card-action-btn">{price}/night</button>
                </div>
            </div>
        </div>
    );
}

export default ListingCard;