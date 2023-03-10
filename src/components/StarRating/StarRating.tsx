import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  max?: number;
  value: number;
}

const StarRating: FC<StarRatingProps> = ({ max = 10, value }) => {
  const { t } = useTranslation("common");
  const rating = value / 2;
  const nbStars = max / 2;

  return (
    <div data-testid="StarRating" className="flex">
      <span className="sr-only">
        {t("stars.rating", { rating: rating, nbStars: nbStars })}
      </span>
      {[...Array(nbStars)].map((item, index) => {
        const num = index + 1;

        if (index + 0.5 === rating) {
          return <FaStarHalfAlt key={index} />;
        } else if (num <= rating) {
          return <FaStar key={index} />;
        } else {
          return <FaRegStar key={index} />;
        }
      })}
    </div>
  );
};

export default StarRating;
