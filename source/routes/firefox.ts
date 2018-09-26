"use strict";

import * as express from "express";
import * as fs from "fs";

module Route {
  export class Firefox {
    public async main(_req: express.Request, res: express.Response, _next: express.NextFunction) {

      let assets = fs.readdirSync('./assets/geckodriver/')
        .filter(file => !fs.statSync(`./assets/geckodriver/${file}`).isDirectory())
        .filter(file => file.endsWith('.zip') || file.endsWith('.tar.gz'));

      assets = assets.map(asset => `GET /assets/geckodriver/${asset}`);

      res.json(assets);
    }
  }
}

export = Route;
