import { Content } from "../type/content";

type ArticleProps = {
  content: Content;
};
export default function TituloBottom({ content }: ArticleProps) {
  return (
    <>
      <img src={content.image} className="w-full" alt="" />
      <h2>{content.title}</h2>
      <h3>{content.subTitle}</h3>
      <p>{content.text}</p>
    </>
  );
}
