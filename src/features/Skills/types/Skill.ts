import { SkillGroup } from "./SkillGroup";

export type Skill = {
  name: string;
  weight: number;
  skillGroup: SkillGroup;
  rating: number;
  details: string;
};
