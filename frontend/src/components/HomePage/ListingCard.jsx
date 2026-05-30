import './card.css'

function ListingCard({ imgURl, title, price, rating }) {

    let style = {
        backgroundImage: `url(${imgURl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="card-container" style={style}>
            {/* <img src={imgURl} alt="" /> */}
            <div className="card-info">
                <div className="mainInfo">
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <p>{rating}</p>
            </div>
        </div>
    );
}

export default ListingCard;