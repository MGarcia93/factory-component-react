import type { Article } from "../type/article";
import type { Content } from "../type/content";
import Tapa from "./tapa";
import TituloBottom from "./tituloBottom";
import TituloFoto from "./tituloFoto";
import TituloTop from "./tituloTop";

export function factory({ view, content, id }: Article) {
  switch (view) {
    case "titulo-top":
      return <TituloTop content={content} />;
      break;
    case "titulo-bottom":
      return <TituloBottom content={content} />;
      break;
    case "titulo-foto":
      return <TituloFoto content={content} />;
      break;
    case "tapa":
      return <Tapa />;
      break;
  }
}
