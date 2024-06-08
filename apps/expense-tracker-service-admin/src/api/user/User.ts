import { Budget } from "../budget/Budget";
import { Expense } from "../expense/Expense";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  budgets?: Array<Budget>;
  createdAt: Date;
  email: string | null;
  expenses?: Array<Expense>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
