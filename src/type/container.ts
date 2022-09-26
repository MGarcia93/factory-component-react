import { Article } from "./article";
export type Container = {
  id: number;
  articles?: Array<Article>;
  containers?: Array<Container>;
};
