import { Star } from "lucide-react";
import "./StarRaing.scss";
const StarRating = ({ rating }: { rating: number }) => {
  const percent = (rating / 10) * 100;

  return (
    <div className="star-rating">
      <div className="stars-empty">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} strokeWidth={1.5} />
        ))}
      </div>
      <div className="stars-filled" style={{ width: `${percent}%` }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} strokeWidth={1.5} fill="currentColor" />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
