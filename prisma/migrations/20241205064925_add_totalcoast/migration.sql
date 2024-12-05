/*
  Warnings:

  - Added the required column `totalCoast` to the `MarketCoast` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarketCoast" ADD COLUMN     "totalCoast" DOUBLE PRECISION NOT NULL;
