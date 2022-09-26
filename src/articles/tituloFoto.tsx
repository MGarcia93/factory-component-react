import { Content } from "../type/content";

type ArticleProps = {
  content: Content;
};
export default function TituloFoto({ content }: ArticleProps) {
  return (
    <>
      <h2>{content.title}</h2>
      <img src={content.image} alt="" className="w-full" />
    </>
  );
}
