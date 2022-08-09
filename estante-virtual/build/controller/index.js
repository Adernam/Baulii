"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const athleteRoute_1 = __importDefault(require("../routes/athleteRoute"));
const competitionRoute_1 = __importDefault(require("../routes/competitionRoute"));
app_1.app.use('/competition', competitionRoute_1.default);
app_1.app.use('/athlete', athleteRoute_1.default);
//# sourceMappingURL=index.js.map