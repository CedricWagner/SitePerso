import { createContext } from "react";

export interface GlobalContextInterface {
  lang: "fr" | "en";
  isVerified: boolean;
}

export const GlobalContext = createContext<GlobalContextInterface | null>(null);
