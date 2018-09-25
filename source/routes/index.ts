"use strict";

import * as express from "express";

module Route {
  export class Index {
    public async main(_req: express.Request, res: express.Response, _next: express.NextFunction) {
      res.json({
        statusCode: "200",
        statusMessage: "OK"
      });
    }
  }
}

export = Route;
