import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({ children }) => (
  <div data-testid="Footer" className="w-full bg-dark bg-opacity-50">
    <p className="py-4 px-2 text-center text-white">{children}</p>
  </div>
);

export default Footer;
