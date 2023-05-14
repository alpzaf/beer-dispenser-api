import type {Request, Response} from "express";
import {createDispenser} from "../models/Dispenser";

export const createDispenserController = async (req: Request, res: Response) => {
    try {
        const { flow_volume } = req.body

        const dispenser = await createDispenser({ flow_volume })

        res.status(201).json(dispenser)
    } catch (err) {
        console.error("Error creating dispenser:", err)
        res.status(500).json({ error: 'An error occurred while creating the dispenser' });
    }
}
