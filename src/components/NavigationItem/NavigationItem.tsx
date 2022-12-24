import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationItemProps {
  title: string;
  href: string;
  picto: any;
}
// btn-primary bg-primary text-white
const NavigationItem: FC<NavigationItemProps> = ({ title, href, picto }) => {
  const location = useLocation();
  const isActive = location.pathname + location.search === href;

  return (
    <Link
      data-testid="NavigationItem"
      to={href}
      className={`btn flex h-[7rem] w-[7rem] flex-col items-center justify-center ${
        isActive ? "btn-primary" : "dark:btn-dark btn-light"
      }`}
    >
      <span className="mb-3 block h-8 w-8">{picto}</span>
      <span>{title}</span>
    </Link>
  );
};

export default NavigationItem;
