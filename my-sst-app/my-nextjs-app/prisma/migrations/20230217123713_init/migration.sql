-- CreateEnum
CREATE TYPE "Category" AS ENUM ('SCIENCE_FICTION', 'ROMANCE', 'THRILLER', 'CHILDREN');

-- CreateTable
CREATE TABLE "Home" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "guests" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Home_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "releasedAt" TIMESTAMP(3) NOT NULL,
    "categories" "Category"[],

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
