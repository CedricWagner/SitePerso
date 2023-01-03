import React, { FC } from "react";

interface InnerPanelProps {}

const InnerPanel: FC<InnerPanelProps> = ({ children }) => (
  <div
    data-testid="InnerPanel"
    className="rounded-lg bg-slate-200 py-8 px-8 dark:bg-slate-700"
  >
    {children}
  </div>
);

export default InnerPanel;
