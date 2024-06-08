import { BudgetListRelationFilter } from "../budget/BudgetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  budgets?: BudgetListRelationFilter;
  email?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
};
