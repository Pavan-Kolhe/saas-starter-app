import { PrismaClient } from "@/generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton(); //?? means either this or that

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
