/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Transaction as PrismaTransaction,
  User as PrismaUser,
} from "@prisma/client";

export class TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TransactionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.transaction.count(args);
  }

  async transactions<T extends Prisma.TransactionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindManyArgs>
  ): Promise<PrismaTransaction[]> {
    return this.prisma.transaction.findMany<Prisma.TransactionFindManyArgs>(
      args
    );
  }
  async transaction<T extends Prisma.TransactionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionFindUniqueArgs>
  ): Promise<PrismaTransaction | null> {
    return this.prisma.transaction.findUnique(args);
  }
  async createTransaction<T extends Prisma.TransactionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionCreateArgs>
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.create<T>(args);
  }
  async updateTransaction<T extends Prisma.TransactionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionUpdateArgs>
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.update<T>(args);
  }
  async deleteTransaction<T extends Prisma.TransactionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionDeleteArgs>
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
