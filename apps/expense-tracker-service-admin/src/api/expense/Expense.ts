import { Category } from "../category/Category";
import { User } from "../user/User";

export type Expense = {
  amount: number | null;
  category?: Category | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
