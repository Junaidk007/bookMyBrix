import './card.css'

function ListingCard({ imgURl, title, price, rating, id }) {
    // Generate a description dynamically incorporating the price to fill the space like the mockup
    const description = `Elegant property featuring premium comfort, modern styling & convenient access starting at ₹${price}/night.`;

    return (
        <div className="card-container">
            <div className="card-image-wrapper">
                <img src={imgURl} alt={title} className="card-image" />
            </div>

            <div className="card-info">
                <div className="card-title-row">
                    <h3 className="card-title">{title}</h3>
                </div>

                {/* <p className="card-description">
                    {description}
                </p> */}
                
                <div className="card-footer">
                    <div className="card-stats">
                        <div className="stat-item" title="Rating">
                            <svg className="stat-icon rating-star" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
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