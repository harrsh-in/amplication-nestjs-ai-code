import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
