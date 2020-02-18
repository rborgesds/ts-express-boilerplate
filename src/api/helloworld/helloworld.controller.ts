import { Request, Response } from 'express';

class HelloWorldController {
  public static show(request: Request, response: Response): Response {
    return response.json({
      hello: 'world',
    });
  }
}

export default HelloWorldController;
