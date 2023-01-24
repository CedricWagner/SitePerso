import { SkillGroup } from "./SkillGroup";

export type Skill = {
  name: string;
  weight: number;
  group: SkillGroup;
  rating: number;
  details: string;
};
