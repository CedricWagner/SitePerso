import { Experience } from "./../types/index";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getExperiencesUrl = (lang: lang = "fr"): string => {
  return `/experiences?lang.slug=${lang}`;
};

export const getExperiences = (lang: lang = "fr"): Promise<Experience[]> => {
  return axios.get(getExperiencesUrl(lang));
};

type QueryFnType = typeof getExperiences;

type UseExperiencesOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useExperiences = ({ lang, config }: UseExperiencesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["lang", lang],
    queryFn: () => getExperiences(lang),
    ...config,
  });
};
