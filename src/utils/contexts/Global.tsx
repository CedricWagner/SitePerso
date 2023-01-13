import { createContext } from "react";
import { lang as langType } from "@/types";

export interface GlobalContextInterface {
  lang: langType;
  isVerified: boolean;
  setVerified: (isVerfied: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);

export function getLangFromGlobalContext(
  context: GlobalContextInterface | null
): langType {
  const lang = context?.lang;
  return lang ? lang : "fr";
}
