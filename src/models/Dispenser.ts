import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Dispenser extends Prisma.DispenserArgs {
    id: string
    opened_at: Date | null
    closed_at: Date | null
    flow_volume: number
    total_spent: number | null
}

export const createDispenser = async (data: Prisma.DispenserCreateInput): Promise<Dispenser> => {
    return prisma.dispenser.create({
        data,
    });
};

export const getDispenserById = async (id: string): Promise<Dispenser | null> => {
    return prisma.dispenser.findUnique({
        where: { id },
    });
};

export const updateDispenser = async (id: string, data: Prisma.DispenserUpdateInput): Promise<Dispenser | null> => {
    return prisma.dispenser.update({
        where: { id },
        data,
    });
};

export const deleteDispenser = async (id: string): Promise<Dispenser | null> => {
    return prisma.dispenser.delete({
        where: { id },
    });
};
