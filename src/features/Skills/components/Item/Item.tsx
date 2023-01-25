import React, { FC } from "react";
import { Skill } from "../../types";

const Item: FC<Skill> = ({ name, rating, details }) => (
  <li data-testid="SkillItem" className="mb-2">
    <p>
      <span className="font-bold">{name}</span>
      {rating && <span className="pl-2">{rating}/10</span>}
    </p>
    {details && <p className="italic">{details}</p>}
  </li>
);

export default Item;
