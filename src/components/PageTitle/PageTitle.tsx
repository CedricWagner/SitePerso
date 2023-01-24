import React, { FC } from "react";

interface PageTitleProps {}

const PageTitle: FC<PageTitleProps> = ({ children }) => (
  <h1 data-testid="PageTitle" className="mb-4 text-2xl font-bold">
    {children}
  </h1>
);

export default PageTitle;
