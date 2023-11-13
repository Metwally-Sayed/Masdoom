-- DropIndex
DROP INDEX "User_email_idx";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isAdmin" SET DEFAULT false;
