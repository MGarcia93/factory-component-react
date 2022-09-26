import { Article as ArticleType } from "../type/article";
import { Container as ContainerType } from "../type/container";
import Article from "./Article";
type ContainerProps = {
  container: ContainerType;
};
export default function Container({ container }: ContainerProps) {
  console.log(container);
  return (
    <section className="grid grid-cols-2 col-span-full gap-2 w-full ">
      {container.containers?.map((value: ContainerType) => {
        console.log({ value });
        return <Container container={value} key={`content-${value.id}`} />;
      })}
      {container.articles?.map((article: ArticleType) => (
        <Article key={`article-${article.id}`} article={article} />
      ))}
    </section>
  );
}
