import React, { FC } from "react";
import Href from "../../utils/interfaces/Href";
import Link from "react-router-dom";

interface HeroButtonProps {
  classes?: string[];
  onClick: (params: any) => any;
}

const HeroButton: FC<HeroButtonProps> = ({
  classes = [""],
  onClick,
  children,
}) => {
  return (
    <button
      data-testid="HeroButton"
      className={`btn dark:btn-dark btn-light py-1 px-1 ${classes.join(" ")}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HeroButton;
