import {Router} from "express";
import {HealthcheckController} from "./healthcheck.controller";

const router = Router();
const controller = new HealthcheckController();

router.get('/healthcheck', controller.show);

export { router as healthcheckRouter };