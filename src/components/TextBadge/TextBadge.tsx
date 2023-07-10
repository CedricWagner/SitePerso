import React, { FC } from "react";

interface TextBadgeProps {
  classNames?: string[];
  children?: React.ReactNode;
}

const TextBadge: FC<TextBadgeProps> = ({ children, classNames }) => (
  <div
    data-testid="TextBadge"
    className={`dark:white inline-block rounded-lg bg-slate-200 py-2 px-2 dark:bg-slate-700 ${classNames?.join(
      " "
    )}`}
  >
    {children}
  </div>
);

export default TextBadge;
