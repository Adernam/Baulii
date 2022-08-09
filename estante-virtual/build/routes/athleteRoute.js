"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AthleteBusiness_1 = __importDefault(require("../business/AthleteBusiness"));
const AthleteController_1 = __importDefault(require("../controller/AthleteController"));
const AthleteData_1 = __importDefault(require("../data/AthleteData"));
const CompetitionData_1 = __importDefault(require("../data/CompetitionData"));
const IdGenerator_1 = require("../services/IdGenerator");
const athleteRoute = express_1.default.Router();
const athleteBusiness = new AthleteBusiness_1.default(new AthleteData_1.default(), new IdGenerator_1.IdGenerator(), new CompetitionData_1.default());
const athleteController = new AthleteController_1.default(athleteBusiness);
athleteRoute.post('/create', athleteController.createAthlete);
exports.default = athleteRoute;
//# sourceMappingURL=athleteRoute.js.map