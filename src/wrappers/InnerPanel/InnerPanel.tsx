import React, { FC } from "react";

interface InnerPanelProps {
  classNames?: string[];
}

const InnerPanel: FC<InnerPanelProps> = ({ classNames, children }) => (
  <div
    data-testid="InnerPanel"
    className={`rounded-lg bg-slate-200 px-4 py-6 dark:bg-slate-700 lg:p-8 ${classNames?.join(
      " "
    )}`}
  >
    {children}
  </div>
);

export default InnerPanel;
