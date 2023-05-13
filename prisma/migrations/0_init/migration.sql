-- CreateTable
CREATE TABLE "Dispenser" (
    "id" TEXT NOT NULL,
    "opened_at" TIMESTAMP(3),
    "closed_at" TIMESTAMP(3),
    "flow_volume" DOUBLE PRECISION NOT NULL,
    "total_spent" DOUBLE PRECISION,

    CONSTRAINT "Dispenser_pkey" PRIMARY KEY ("id")
);

