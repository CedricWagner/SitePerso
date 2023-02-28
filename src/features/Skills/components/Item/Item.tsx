import StarRating from "@/components/StarRating/StarRating";
import React, { FC } from "react";
import { Skill } from "../../types";

const Item: FC<Skill> = ({ name, rating, details }) => (
  <li data-testid="SkillItem" className="mb-2">
    <div>
      <span className="pr-4 font-bold">{name}</span>
      {rating && (
        <div className="inline-block">
          <StarRating value={rating} />
        </div>
      )}
    </div>
    {details && <p className="italic">{details}</p>}
  </li>
);

export default Item;
