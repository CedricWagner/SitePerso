import { Training } from "./../types/";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getTrainingsUrl = (lang: lang = "fr"): string => {
  return `/trainings?lang.slug=${lang}`;
};

export const getTrainings = (lang: lang = "fr"): Promise<Training[]> => {
  return axios.get(getTrainingsUrl(lang));
};

type QueryFnType = typeof getTrainings;

type UseTrainingsOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useTrainings = ({ lang, config }: UseTrainingsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["Trainings", lang],
    queryFn: () => getTrainings(lang),
    ...config,
  });
};
