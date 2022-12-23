import React, { FC } from "react";

interface HeroButtonProps {
  classes?: string[];
  onClick: (params: any) => any;
}

const HeroButton: FC<HeroButtonProps> = ({
  classes = [""],
  onClick,
  children,
}) => (
  <button
    data-testid="HeroButton"
    className={`h-8 w-8 py-1 px-1 dark:bg-dark dark:text-white ${classes.join(
      " "
    )}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default HeroButton;
