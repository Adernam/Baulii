"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CompetitionBusiness_1 = __importDefault(require("../business/CompetitionBusiness"));
const CompetitionController_1 = __importDefault(require("../controller/CompetitionController"));
const AthleteData_1 = __importDefault(require("../data/AthleteData"));
const CompetitionData_1 = __importDefault(require("../data/CompetitionData"));
const IdGenerator_1 = require("../services/IdGenerator");
const competitionRoute = express_1.default.Router();
const competitionBusiness = new CompetitionBusiness_1.default(new CompetitionData_1.default(), new AthleteData_1.default(), new IdGenerator_1.IdGenerator());
const competitionController = new CompetitionController_1.default(competitionBusiness);
competitionRoute.get('/ranking', competitionController.getRanking);
competitionRoute.post('/create', competitionController.createCompetition);
competitionRoute.post('/finish', competitionController.finishCompetition);
exports.default = competitionRoute;
//# sourceMappingURL=competitionRoute.js.map