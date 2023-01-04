import { createContext } from "react";

export interface GlobalContextInterface {
  lang: "fr" | "en";
  isVerified: boolean;
  setVerified: (isVerfied: boolean) => void;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);
