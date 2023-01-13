import React, { FC } from "react";

interface UnderContructionProps {}

const UnderContruction: FC<UnderContructionProps> = () => (
  <div
    data-testid="UnderContruction"
    className="flex h-40 flex-col items-center justify-center"
  >
    <p className="text-xl">En construction...</p>
  </div>
);

export default UnderContruction;
