import { User } from "../user/User";

export type Budget = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
