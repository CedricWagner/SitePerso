import React, { FC } from "react";

interface TextBadgeProps {}

const TextBadge: FC<TextBadgeProps> = ({ children }) => (
  <div data-testid="TextBadge">{children}</div>
);

export default TextBadge;
