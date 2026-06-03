import ImageBox from '../components/ListingPage/ImageBox';
import ListDescription from '../components/ListingPage/ListDescription';
import UserCard from '../components/ListingPage/UserCard';
import ReviewCard from '../components/ListingPage/ReviewCard';
import './listing.css'
import { useRef, useState } from 'react';
import dayjs from "dayjs";
import listData from './data';

function Listing() {

    const data = listData[0];
    const {description, highlights} = data; 

    const [checkInDate, setCheckIn] = useState('Add date')
    const [checkOutDate, setCheckOut] = useState('Add date')

    let checkIn = useRef(null)
    let checkOut = useRef(null)

    let nights = dayjs(checkOutDate).diff(checkInDate, 'day')


    return (
        <div className="listing-container">
            <div className="title-box">
                <h1>Casa One – Premium Cozy Retreat, Rajajipuram</h1>
            </div>
            <ImageBox image={data.images}/>
            <div className="info-box">
                <div className="info-container">
                    <UserCard owner={data.owner}/>
                    <ListDescription  description={description} highlights={highlights}/>
                </div>
                <div className="price-box">
                    <div>
                        <h3 className="price">₹{data.price * (nights > 0 ? nights : 1)}</h3>
                        <p>for {nights > 0 ? nights : 1} {nights > 1 ? 'nights' : 'night'}</p>
                    </div>
                    <div className="calender">
                        <div className="date-container">
                            <div className="checkIN" onClick={() => { checkIn.current?.showPicker() }}>
                                <input ref={checkIn} onChange={() => { setCheckIn(checkIn.current?.value) }} type="date" min={new Date().toISOString().split('T')[0]} />
                                <h3>Check In</h3>
                                <p>{checkInDate}</p>
                            </div>
                            <div className="line"></div>
                            <div className="checkOut" onClick={() => { checkOut.current?.showPicker() }}>
                                <h3>Check Out</h3>
                                <p>{checkOutDate}</p>
                                <input ref={checkOut} onChange={() => { setCheckOut(checkOut.current?.value) }} type="date" min={checkInDate} />
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
                {data.reviews.map((review) => (<ReviewCard  review={review}/>))}
            </div>
            <div className="location-box">
                <div className="map">
                    <h1>Map will be here</h1>
                </div>
            </div>

        </div>
    );
}

export default Listing;