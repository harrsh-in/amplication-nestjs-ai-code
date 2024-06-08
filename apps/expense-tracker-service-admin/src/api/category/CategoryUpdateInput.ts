import { ExpenseUpdateManyWithoutCategoriesInput } from "./ExpenseUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  expenses?: ExpenseUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
