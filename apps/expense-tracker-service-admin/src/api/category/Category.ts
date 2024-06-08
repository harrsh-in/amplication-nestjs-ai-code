import { Expense } from "../expense/Expense";

export type Category = {
  createdAt: Date;
  description: string | null;
  expenses?: Array<Expense>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
