import { Router } from 'express';
import HelloWorldController from './helloworld.controller';

const helloworldRouter = Router();

helloworldRouter.get('/hello', HelloWorldController.show);

export default helloworldRouter;
