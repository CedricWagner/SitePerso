import Panel from "@/wrappers/Panel/Panel";
import React, { FC } from "react";
import Waiting from "../Waiting/Waiting";

interface PanelWaitingProps {}

const PanelWaiting: FC<PanelWaitingProps> = () => (
  <div data-testid="PanelWaiting">
    <Panel>
      <Waiting size="lg" isInline={false} />
    </Panel>
  </div>
);

export default PanelWaiting;
