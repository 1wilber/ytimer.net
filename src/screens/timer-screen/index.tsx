import { DisplayScramble } from "./components/display-scramble";
import { TimerView } from "./components/timer";
import { PreviewScramble } from "./components/preview-scramble";
import { EventSelector } from "./components/event-selector";
import { Grid, GridItem } from "@chakra-ui/react";

const TimerScreen = () => {
  return (
    <Grid
      h="100%"
      templateColumns="repeat(1, 1fr)"
      templateRows="repeat(4, 1fr)"
    >
      <GridItem display="flex" justifyContent="center" alignItems="flex-start">
        {/* <EventSelector /> */}
      </GridItem>

      <GridItem display="flex" justifyContent="center" alignItems="flex-start">
        <DisplayScramble />
      </GridItem>
      <GridItem display="flex" justifyContent="center" alignItems="flex-start">
        <TimerView />
      </GridItem>
      <GridItem>
        <Grid h="100%" templateColumns="repeat(2, 1fr)">
          <GridItem h="100%">
            <PreviewScramble />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export { TimerScreen };
