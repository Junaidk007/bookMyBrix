import { useRef, useState } from 'react';
import './searchBox.css';
import dayjs from "dayjs";

function SearchBox() {

    const [checkInDate, setCheckIn] = useState("")
    const [checkOutDate, setCheckOut] = useState("")

    let checkIn = useRef(null)
    let checkOut = useRef(null)

    return (
        <div className="search-box">
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" id="location" placeholder='Where are you going?' />
            </div>
            <div onClick={() => checkIn.current?.showPicker()}>
                <div>Check In</div>
                <div className="addDate">{checkInDate == "" ? "Add date" : dayjs(checkInDate).format('DD - MMM')}</div>
                <input ref={checkIn} onChange={() => setCheckIn(checkIn.current?.value)} type="date" id="check-in" />
            </div>
            <div onClick={() => checkOut.current?.showPicker()}>
                <div>Check Out</div>
                <div className="addDate">{checkOutDate == "" ? "Add date" : dayjs(checkOutDate).format('DD - MMM')}</div>
                <input ref={checkOut} onChange={() => setCheckOut(checkOut.current?.value)} type="date" id="check-out" />
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