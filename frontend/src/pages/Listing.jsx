import ImageBox from '../components/ImageBox';
import ListDescription from '../components/ListDescription';
import UserCard from '../components/UserCard';
import ReviewCard from '../components/ReviewCard';
import './listing.css'
import { useRef, useState } from 'react';
import dayjs from "dayjs";

function Listing() {

    const [checkInDate, setCheckIn] = useState('Add date')
    const [checkOutDate, setCheckOut] = useState('Add date')

    let checkIn = useRef(null)
    let checkOut = useRef(null)

    let price = 2000
    let nights = dayjs(checkOutDate).diff(checkInDate, 'day')

    return (
        <div className="listing-container">
            <div className="title-box">
                <h1>Casa One – Premium Cozy Retreat, Rajajipuram</h1>
            </div>
            <ImageBox/>
            <div className="info-box">
                <div className="info-container">
                    <UserCard/>
                    <ListDescription/>
                </div>
                <div className="price-box">
                    <div>
                        <h3 className="price">₹{price * (nights > 0 ? nights : 1)}</h3>
                        <p>for {nights > 0 ? nights : 1} {nights > 1 ? 'nights' : 'night'}</p>
                    </div>
                    <div className="calender">
                        <div className="date-container">
                            <div className="checkIN" onClick={() => { checkIn.current?.showPicker() }}>
                                <input ref={checkIn} onChange={() => { setCheckIn(checkIn.current?.value) }} type="date" min={new Date().toISOString().split('T')[0]}/>
                                <h3>Check In</h3>
                                <p>{checkInDate}</p>
                            </div>  
                            <div className="line"></div>
                            <div className="checkOut" onClick={() => { checkOut.current?.showPicker() }}>
                                <h3>Check Out</h3>
                                <p>{checkOutDate}</p>
                                <input ref={checkOut} onChange={() => { setCheckOut(checkOut.current?.value) }} type="date" min={checkInDate}/>
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
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
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