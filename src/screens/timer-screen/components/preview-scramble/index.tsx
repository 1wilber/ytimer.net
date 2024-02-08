import "cubing/twisty";
import { useAppSelector } from "@/hooks/redux";
import { Card, CardContent } from "@mui/material";
import { createElement } from "react";
import { events } from "@/constants";

const PreviewScramble = () => {
  const { event } = useAppSelector(({ timer }) => timer);
  const { currentScramble } = useAppSelector(({ scramble }) => scramble);

  const DisplayScrambledPuzzle = () => {
    return createElement("twisty-player", {
      puzzle: events[event],
      style: { width: "inherit", height: "150px" },
      alg: currentScramble,
      visualization: "2D",
      background: "none",
      "control-panel": "none",
    });
  };

  return (
    <Card>
      <CardContent style={{padding: 5}}>
        <DisplayScrambledPuzzle />
      </CardContent>
    </Card>
  );
};

export { PreviewScramble };
