import { FC } from "react";
import Panel from "../../wrappers/Panel/Panel";
import ProfileCardBlock from "../ProfileCardBlock/ProfileCardBlock";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div data-testid="About">
    <div className="block md:hidden">
      <ProfileCardBlock />
    </div>
    <Panel>En construction...</Panel>
  </div>
);

export default About;
