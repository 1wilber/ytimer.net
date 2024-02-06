import "cubing/twisty";
import { eventTypes } from "./scrambled-puzzle.constants.js";
import { useAppSelector } from "@/hooks/redux";
import React from "react";

export const ScrambledPuzzle = () => {
  const { loading, currentScramble } = useAppSelector(
    ({ scramble }) => scramble,
  );
  const { event } = useAppSelector(({ timer }) => timer);

  const DisplayScrambledPuzzle = () => {
    return React.createElement("twisty-player", {
      puzzle: eventTypes[event],
      style: { width: "250px", height: "150px" },
      alg: currentScramble,
      visualization: "2D",
      background: "none",
      "control-panel": "none",
    });
  };

  return (
    <div className="flex justify-center items-center w-fit card rounded-2xl bg-base-300 self-end">
      <div className="card-body p-2">
        {loading ? (
          <div className="loading loading-spinner loading-lg"></div>
        ) : (
          <DisplayScrambledPuzzle />
        )}
      </div>
    </div>
  );
};
