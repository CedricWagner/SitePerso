import React, { FC } from "react";

interface PageTitleProps {}

const PageTitle: FC<PageTitleProps> = ({ children }) => (
  <h2 data-testid="PageTitle" className="mb-4 text-xl">
    {children}
  </h2>
);

export default PageTitle;
