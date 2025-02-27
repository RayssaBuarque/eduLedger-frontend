import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className={styles.starContainer}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={30}
            className={starValue <= rating ? styles.selected : styles.unselected}
            onClick={() => setRating(starValue)}
          />
        );
      })}
      <p className={styles.ratingText}>{rating} de 5</p>
    </div>
  );
}
