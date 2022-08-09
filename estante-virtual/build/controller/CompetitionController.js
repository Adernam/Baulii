"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CompetitionController {
    constructor(competitionBusiness) {
        this.competitionBusiness = competitionBusiness;
        this.createCompetition = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name;
            const inputCompetitionDTO = {
                name
            };
            try {
                const competitionId = yield this.competitionBusiness.createCompetition(inputCompetitionDTO);
                res.status(200).send({ message: 'Competition created successfully!', competitionId });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
            ;
        });
        this.finishCompetition = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const competitionName = req.body.name;
            try {
                const finishDate = yield this.competitionBusiness.finishCompetition(competitionName);
                res.status(200).send({ message: 'Competition finished successfully!', finishDate });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
            ;
        });
        this.getRanking = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const competitionName = req.body.competition;
            try {
                const ranking = yield this.competitionBusiness.getRanking(competitionName);
                res.status(200).send({ message: 'Competition ranking at the moment:', ranking });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
            ;
        });
    }
}
exports.default = CompetitionController;
//# sourceMappingURL=CompetitionController.js.map