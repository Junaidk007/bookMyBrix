import { Link } from 'react-router-dom';
import ListingCard from './ListingCard';
import './showlisting.css'


function ShowListing({ title, listData }) {

    return (
        <div className="listings-container">
            <h2>{title}</h2>
            <div className="cards-container">
                {listData.map((list, idx) => (
                    <Link key={idx} to={`/listing/${idx}`}>
                        <ListingCard
                            id={idx}
                            key={idx}
                            title={list.title}
                            price={list.price}
                            rating={list.rating}
                            imgURl={list.images[0].imgURL}
                        />
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default ShowListing;