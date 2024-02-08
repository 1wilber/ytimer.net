import { Grid } from "@mui/material";
import { DisplayScramble } from "./components/display-scramble";
import { TimerView } from "./components/timer";
import { PreviewScramble } from "./components/preview-scramble";
import { EventSelector } from "./components/event-selector";

const TimerScreen = () => {
  return (
    <Grid height="100%" container spacing={2}>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <EventSelector />
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
      >
        <DisplayScramble />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TimerView />
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Grid container spacing={1} paddingX={1} paddingY={0}>
          <Grid item xs={6}>
            <PreviewScramble />
          </Grid>

          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export { TimerScreen };
