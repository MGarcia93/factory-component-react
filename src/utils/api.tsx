import Diagram from "../type/diagram";
import index from "../mock/index.json";
import section from "../mock/section.json";

export function api(name: string) {
  return name == "index" ? index : section;
}
