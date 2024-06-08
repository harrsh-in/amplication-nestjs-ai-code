import { ExpenseCreateNestedManyWithoutCategoriesInput } from "./ExpenseCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
