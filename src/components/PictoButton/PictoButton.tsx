import React, { FC } from "react";

interface PictoButtonProps {
  picto: React.ComponentProps<"svg">;
  title: string;
  href: string;
  twTextClass?: string;
  twHoverBgClass?: string;
}

const PictoButton: FC<PictoButtonProps> = ({
  picto,
  title,
  href,
  twTextClass,
  twHoverBgClass,
}) => (
  <a
    data-testid="PictoButton"
    href={href}
    target="_blank"
    rel="nofollow"
    title={title}
    className={`btn block h-10 w-10 bg-slate-200 dark:bg-slate-700 ${twTextClass} dark:${twHoverBgClass} ${twHoverBgClass} hover:text-white `}
  >
    <span aria-hidden="true">{picto}</span>
  </a>
);

export default PictoButton;
