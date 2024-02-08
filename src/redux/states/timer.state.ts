import type { TimerStatuses, WCAEvent } from "@/models";
import { Result } from "@/models/result.model";

export interface TimerState {
  results: Result[];
  event: WCAEvent;
  status: TimerStatuses;
}
