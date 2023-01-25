import { Skill } from "./../types/";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getSkillsUrl = (lang: lang = "fr"): string => {
  return `/skills?lang.slug=${lang}`;
};

export const getSkills = (
  lang: lang = "fr",
  groupId: number
): Promise<Skill[]> => {
  return axios.get(getSkillsUrl(lang) + "&skillGroup.id=" + groupId);
};

type QueryFnType = typeof getSkills;

type UseSkillsOptions = {
  lang: lang;
  groupId: number;
  config?: QueryConfig<QueryFnType>;
};

export const useSkills = ({ lang, groupId, config }: UseSkillsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["skills", lang, groupId],
    queryFn: () => getSkills(lang, groupId),
    ...config,
  });
};
