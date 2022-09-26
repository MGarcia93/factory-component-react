import type { Article as ArticleType } from "../type/article";
import { factory } from "../articles/factory";
export default function Article({ article }: { article: ArticleType }) {
  return (
    <article className="shadow-lg bg-white bg-opacity-75 text-slate-800 p-2 rounded-md mx-2 mb-5 first:last:col-span-full">
      {factory(article)}
    </article>
  );
}
