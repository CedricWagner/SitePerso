import React, { FC } from "react";

interface PanelProps {}

const Panel: FC<PanelProps> = ({ children }) => (
  <div
    data-testid="Panel"
    className="mb-8 rounded-lg bg-white px-8 py-8 shadow-md dark:bg-dark dark:text-white dark:shadow-none"
  >
    {children}
  </div>
);

export default Panel;
