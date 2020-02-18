import { Router } from 'express';
import healthcheckRouter from './api/healthcheck/healthcheck.router';
import helloworldRouter from './api/helloworld/helloworld.router';

const router = Router();

router.use(healthcheckRouter);
router.use(helloworldRouter);

export default router;
