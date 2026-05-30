import UserCard from "./UserCard";
import Rating from "@mui/material/Rating";
import "./reviewcard.css";

function ReviewCard({
    ratingValue = 5,
    timeAgo = "1 week ago",
    reviewText = "The place was clean, bright, and had everything we needed. The host was super helpful and made sure we had a great stay!"
}) {
    return (
        <div className="review-card">
            <div className="user-info">
                <div className="user-pfp"></div>
                <div className="userName">
                    <h4>Ritesh</h4>
                    <p>3 months ago</p>
                </div>
            </div>
            <div className="review">
                <div className="rating">
                    <Rating
                        name="review-rating"
                        value={ratingValue}
                        readOnly
                        precision={0.5}
                        size="small"
                    />
                    <span>{timeAgo}</span>
                </div>
                <p className="review-text">{reviewText}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
