import { BudgetCreateNestedManyWithoutUsersInput } from "./BudgetCreateNestedManyWithoutUsersInput";
import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  budgets?: BudgetCreateNestedManyWithoutUsersInput;
  email?: string | null;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
