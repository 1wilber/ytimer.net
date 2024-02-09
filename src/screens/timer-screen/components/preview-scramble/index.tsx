import "cubing/twisty";
import { useAppSelector } from "@/hooks/redux";
import { Card, CardBody } from "@chakra-ui/react";
import { createElement } from "react";
import { events } from "@/constants";

const PreviewScramble = () => {
  const { event } = useAppSelector(({ timer }) => timer);
  const { current: scramble } = useAppSelector(({ scramble }) => scramble);

  const DisplayScrambledPuzzle = () => {
    return createElement("twisty-player", {
      puzzle: events[event],
      style: { width: "inherit", height: "150px" },
      alg: scramble,
      visualization: "2D",
      background: "none",
      "control-panel": "none",
    });
  };

  return (
    <Card p={0}>
      <CardBody>
        <DisplayScrambledPuzzle />
      </CardBody>
    </Card>
  );
};

export { PreviewScramble };
