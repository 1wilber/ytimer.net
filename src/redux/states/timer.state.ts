import type { TimerStatuses, WCAEvent } from "@/models";

export interface TimerState {
  results: TimeResult[];
  event: WCAEvent;
  status: TimerStatuses;
}
