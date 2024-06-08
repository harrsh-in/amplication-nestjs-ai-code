import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseUpdateInput = {
  amount?: number | null;
  category?: CategoryWhereUniqueInput | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
