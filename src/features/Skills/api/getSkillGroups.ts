import { SkillGroup } from "./../types/";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getSkillGroupsUrl = (lang: lang = "fr"): string => {
  return `/skill_groups?lang.slug=${lang}`;
};

export const getSkillGroups = (lang: lang = "fr"): Promise<SkillGroup[]> => {
  return axios.get(getSkillGroupsUrl(lang));
};

type QueryFnType = typeof getSkillGroups;

type UseSkillGroupsOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useSkillGroups = ({ lang, config }: UseSkillGroupsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["lang", lang],
    queryFn: () => getSkillGroups(lang),
    ...config,
  });
};
