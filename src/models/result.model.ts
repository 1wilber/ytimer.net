import type { WCAEvent } from ".";

export interface Result {
  id: number;
  time: number;
  event: WCAEvent;
  scramble: string;
  createdAt: number;
}
