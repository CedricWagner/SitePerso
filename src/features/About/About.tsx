import { FC } from "react";
import Panel from "@/wrappers/Panel/Panel";
import { Profile } from "@/features/Profile";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div data-testid="About">
    <div className="block md:hidden">
      <Profile />
    </div>
    <Panel>En construction...</Panel>
  </div>
);

export default About;
