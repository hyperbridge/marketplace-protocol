"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SwaggerParser = require("swagger-parser");
const swaggerRoutes = require("swagger-routes-express");
const api_1 = require("./api");
const objection_1 = require("objection");
const config_1 = require("./config");
objection_1.Model.knex(require('knex')(config_1.default.db));
exports.default = () => __awaiter(this, void 0, void 0, function* () {
    const parser = new SwaggerParser({
        apiSeparator: '_',
        scopes: {},
    });
    const apiDescription = yield parser.validate('api.yml');
    const connect = swaggerRoutes(api_1.default, apiDescription);
    const app = express();
    // do any other app stuff, such as wire in passport, use cors etc
    // then attach the routes
    connect(app);
    // add any error handlers last
    return app;
});
