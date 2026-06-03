import UserCard from "./UserCard";
import Rating from "@mui/material/Rating";
import "./reviewcard.css";

// {
//     ratingValue = 5,
//     timeAgo = "1 week ago",
//     reviewText = "The place was clean, bright, and had everything we needed. The host was super helpful and made sure we had a great stay!"
// }

function ReviewCard({review}) {
    return (
        <div className="review-card">
            <div className="user-info">
                <div className="user-pfp">
                    <img src={review.author.pfp} alt="" />
                </div>
                <div className="userName">
                    <h4>{review.author.username}</h4>
                    <p>{review.author.timestamp} on bookMyBrix</p>
                </div>
            </div>
            <div className="review">
                <div className="rating">
                    <Rating
                        name="review-rating"
                        value={review.ratingValue}
                        readOnly
                        precision={0.5}
                        size="small"
                    />
                    <span>{review.timeAgo}</span>
                </div>
                <p className="review-text">{review.reviewText}</p>
            </div>
        </div>
    );
}

export default ReviewCard;
