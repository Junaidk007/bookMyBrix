import ImageBox from '../components/ImageBox';
import './listing.css'

function Listing() {
    return (
        <div className="listing-container">
            <div className="title-box">
                <h1>Casa One – Premium Cozy Retreat, Rajajipuram</h1>
            </div>
            <ImageBox/>
            <div className="info-box">
                <div className="info-container">
                    <div className="host-info">
                        <div className="host-pfp"></div>
                        <div className="hostName">
                            <h4>Hosted by Ritesh</h4>
                            <p>Superhost3 months hosting</p>
                        </div>
                    </div>
                    <div className="listing-description">
                        <p>
                            Welcome to a bright, comfortable space located in the heart of Rajajipuram, Lucknow
                            This property is designed to give you a relaxed and stylish experience. Perfect for short getaways or business travelers looking for convenience.

                            Highlights:

                            Spacious room with natural light

                            Modern interiors & comfy bedding

                            Close to markets, cafes & transport

                            Safe, quiet neighborhood
                        </p>
                    </div>
                </div>
                <div className="price-box">
                    <div>
                        <h3 className="price">₹24,100</h3>
                        <p>for 8 nights</p>
                    </div>
                    <div className="calender">
                        <div className="date-container">
                            <div className="checkIN">
                                <input type="date" name="" id="" />
                                <h3>Check In</h3>
                                <p>7/1/2026</p>
                            </div>
                            <div className="line"></div>
                            <div className="checkOut">
                                <h3>Check Out</h3>
                                <p>7/1/2026</p>
                                <input type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="reservation-btn-box">
                            <button className="rev-btn">Reserve</button>
                        </div>
                        <div className="not-charged">
                            <p>You won't be charged yet</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-box">

            </div>
            <div className="location-box">

            </div>

        </div>
    );
}

export default Listing;