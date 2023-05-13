import type {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default async function create(req: Request, res: Response) {
    const { flow_volume } = req.body as {flow_volume: number}

    const result = await prisma.dispenser.create({
        data: {
            flow_volume
        }
    })

    res.json({
        status: "true",
        message: "Dispenser created successfully",
        result
    })
}
