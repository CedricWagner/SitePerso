import { useQuery } from "react-query";

import { axios } from "@/lib/axios";
import { lang } from "@/types";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";

type AboutContent = {
  title: string;
  content: string;
}[];

export const getAboutUrl = (lang: lang = "fr"): string => {
  return `/text_blocks?lang.slug=${lang}&slug=about`;
};

export const getAbout = (lang: lang = "fr"): Promise<AboutContent> => {
  return axios.get(getAboutUrl(lang));
};

type QueryFnType = typeof getAbout;

type UseAboutOptions = {
  lang: lang;
  config?: QueryConfig<QueryFnType>;
};

export const useAbout = ({ lang, config }: UseAboutOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ["About", lang],
    queryFn: () => getAbout(lang),
    ...config,
  });
};
