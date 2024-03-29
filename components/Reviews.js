import React, { useState, useRef, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import styles from "../styles/Reviews.module.css";
import { reviews } from "../constants/constants.js";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.4 * (i / reviews.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.5)) *
          reviews.length
      );
      setActiveIndex(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        scroll(carouselRef.current, carouselRef.current.scrollWidth * 0.15);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.reviews}>
      <div className="divider"></div>
      <p className="section-title-small">See Our Review</p>
      <h2 className="section-title-large">What Our User Say About Us</h2>
      <div
        ref={carouselRef}
        className={styles.ReviewCards}
        onScroll={handleScroll}>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            title={review.title}
            description={review.description}
            image={review.image}
            userName={review.userName}
            userJob={review.userJob}
            userImage={review.userImage}
            rate={review.rate}
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>
      <div className={styles.indicators}>
        {reviews.map((item, index) => {
          return (
            <button
              key={index}
              className={`${styles.indicatorButtons} ${
                index === activeIndex
                  ? styles.indicatorSymbolActive
                  : styles.indicatorSymbol
              }`}
              onClick={(e) => handleClick(e, index)}></button>
          );
        })}
      </div>
    </div>
  );
}
