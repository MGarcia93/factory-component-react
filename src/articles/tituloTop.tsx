import { Content } from "../type/content";

type ArticleProps = {
  content: Content;
};
export default function TituloTop({ content }: ArticleProps) {
  console.log(content);
  return (
    <>
      <h2>{content.title}</h2>
      <img src={content.image} className="w-full" alt="" />
      <h3>{content.subTitle}</h3>
      <p>{content.text}</p>
    </>
  );
}
