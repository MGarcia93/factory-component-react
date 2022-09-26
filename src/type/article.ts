import { Content } from "./content";

export type Article = {
  id: number;
  view: string;
  content?: Content;
};
