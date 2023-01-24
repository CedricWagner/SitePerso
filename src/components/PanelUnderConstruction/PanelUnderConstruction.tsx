import Panel from "@/wrappers/Panel/Panel";
import React, { FC } from "react";
import UnderContruction from "../UnderContruction/UnderContruction";

interface PanelUnderConstructionProps {}

const PanelUnderConstruction: FC<PanelUnderConstructionProps> = () => (
  <div data-testid="PanelUnderConstruction">
    <Panel>
      <UnderContruction />
    </Panel>
  </div>
);

export default PanelUnderConstruction;
