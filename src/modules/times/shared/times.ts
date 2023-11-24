import type { WCAEvent } from "@/modules/shared/event";

export interface TimerReducerState {
  results: TimeResult[];
  event: WCAEvent;
  status: TimerStatuses;
}

export interface TimeResult {
  id: number;
  time: number;
  event: WCAEvent;
  scramble: string;
  createdAt: number;
}

export type TimerStatuses = "running" | "stopped";
