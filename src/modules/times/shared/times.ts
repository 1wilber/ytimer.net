import type { WCAEvent } from "@/modules/shared/event";

export interface TimerReducerState {
  results: TimeResult[];
  event: WCAEvent;
  status: TimerStatus;
}

export interface TimeResult {
  id: string;
  time: number;
  event: WCAEvent;
  scramble: string;
  createdAt: number;
}

export type TimerStatuses = "running" | "stopped";
