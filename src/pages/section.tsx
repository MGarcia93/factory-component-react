import { useEffect, useState } from "react";
import type { Diagram } from "../type/diagram";
import Container from "../layouts/Container";
import type { Container as ContainerType } from "../type/container";
import { api } from "../utils/api";
export default function Index() {
  const [diagram, setDiagram] = useState<Diagram>();

  useEffect(() => {
    const data: Diagram = api("section");
    setDiagram(data);
  }, []);
  return (
    <div className="max-w-6xl m-auto bg-opacity-70 bg-zinc-300 min-h-full w-full rounded-b-lg pt-3 pb-3">
      {diagram?.map((container: ContainerType) => (
        <Container
          container={container}
          key={`content-${container.id}`}
        ></Container>
      ))}
    </div>
  );
}
