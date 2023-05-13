import type { Application } from "express";
import create from "../controllers/DispenserController";

export const loadEndpoints = (app: Application): void => {
    app.post("/dispenser/create", create)
};
