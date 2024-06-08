import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BudgetUpdateInput = {
  endDate?: Date | null;
  startDate?: Date | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
