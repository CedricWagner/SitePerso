import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationItemProps {
  title: string;
  href: string;
  picto: React.ReactNode;
  onSelect: () => void;
}

const NavigationItem: FC<NavigationItemProps> = ({
  title,
  href,
  picto,
  onSelect,
}) => {
  const location = useLocation();
  const isActive = location.pathname + location.search === href;

  return (
    <li>
      <Link
        data-testid="NavigationItem"
        to={href}
        onClick={onSelect}
        className={`btn mb-3 flex items-center justify-center lg:mb-0 lg:h-[7rem] lg:w-[7rem] lg:flex-col ${
          isActive ? "btn-primary" : "dark:btn-dark btn-light"
        }`}
      >
        <span className="block h-8 w-8 lg:mb-3" aria-hidden="true">
          {picto}
        </span>
        <span className="pl-3 lg:pl-0">{title}</span>
      </Link>
    </li>
  );
};

export default NavigationItem;
