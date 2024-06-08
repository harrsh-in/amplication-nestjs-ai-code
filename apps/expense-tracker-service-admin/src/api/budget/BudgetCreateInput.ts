import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetCreateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
