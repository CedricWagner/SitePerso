import { ProfileInformation } from "./../types";
import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

export const getProfileInformationUrl = (lang: lang = "fr"): string => {
  return `/profile_informations?langs.slug=${lang}`;
};

export const getProfileInformation = (
  lang: lang = "fr"
): Promise<ProfileInformation[]> => {
  return axios.get(getProfileInformationUrl(lang));
};

type QueryFnType = typeof getProfileInformation;

type UseProfileInformationOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useProfileInformation = ({
  lang,
  config,
}: UseProfileInformationOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["ProfileInformation", lang],
    queryFn: () => getProfileInformation(lang),
    ...config,
  });
};
