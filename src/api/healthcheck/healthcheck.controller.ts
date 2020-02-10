import { Request, Response } from 'express';

export class HealthcheckController {

    public show(request: Request, response: Response) {
        return response.json({
            status: 'OK',
            version: process.env.npm_package_version,
            host: request.hostname
        })
    }
}