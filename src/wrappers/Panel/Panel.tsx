import React, { FC } from "react";

interface PanelProps {}

const Panel: FC<PanelProps> = ({ children }) => (
  <div
    data-testid="Panel"
    className="mb-8 rounded-lg px-8 py-8 dark:bg-dark dark:text-white"
  >
    {children}
  </div>
);

export default Panel;
