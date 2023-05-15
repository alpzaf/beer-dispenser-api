import type {Request, Response, NextFunction} from "express";
import {createDispenser} from "../models/Dispenser";

export const createDispenserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { flow_volume } = req.body

        const dispenser = await createDispenser({ flow_volume })

        res.status(201).json(dispenser)
    } catch (err) {
        next(err)
        res.status(500).json({ error: 'An error occurred while creating the dispenser' });
    }
}
