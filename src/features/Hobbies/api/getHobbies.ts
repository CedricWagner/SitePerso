import { Hobby } from "./../types";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getHobbiesUrl = (lang: lang = "fr"): string => {
  return `/hobbies?lang.slug=${lang}`;
};

export const getHobbies = (lang: lang = "fr"): Promise<Hobby[]> => {
  return axios.get(getHobbiesUrl(lang));
};

type QueryFnType = typeof getHobbies;

type UseHobbiesOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useHobbies = ({ lang, config }: UseHobbiesOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["Hobbies", lang],
    queryFn: () => getHobbies(lang),
    ...config,
  });
};
