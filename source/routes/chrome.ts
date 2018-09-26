"use strict";

import * as express from "express";
import * as fs from "fs";

module Route {
  export class Chrome {
    public async main(_req: express.Request, res: express.Response, _next: express.NextFunction) {

      let assets = fs.readdirSync('./assets/chromedriver/')
        .filter(file => !fs.statSync(`./assets/chromedriver/${file}`).isDirectory())
        .filter(file => file.endsWith('.zip') || file.endsWith('.tar.gz'));

      assets = assets.map(asset => `GET /assets/chromedriver/${asset}`);

      res.json(assets);
    }
  }
}

export = Route;
