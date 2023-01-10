import React, { FC } from "react";

interface InnerPanelProps {}

const InnerPanel: FC<InnerPanelProps> = ({ children }) => (
  <div
    data-testid="InnerPanel"
    className="rounded-lg bg-slate-200 px-4 py-6 dark:bg-slate-700 lg:p-8"
  >
    {children}
  </div>
);

export default InnerPanel;
