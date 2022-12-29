import React, { FC } from "react";

interface InnerPanelProps {}

const InnerPanel: FC<InnerPanelProps> = ({ children }) => (
  <div data-testid="InnerPanel">{children}</div>
);

export default InnerPanel;
