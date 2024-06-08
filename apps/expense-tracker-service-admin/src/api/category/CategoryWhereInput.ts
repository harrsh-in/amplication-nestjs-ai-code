import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
