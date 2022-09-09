import { api } from "./api";

interface Time {
  id: string;
  team: string;
  amount: number;
}

export function getTimes() {
  return api.get<Time[]>("times");
}

export function getTime(id: string) {
  return api.get<Time>(`times/${id}`);
}
