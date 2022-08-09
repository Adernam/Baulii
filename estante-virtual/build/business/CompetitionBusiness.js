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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Competition_1 = __importDefault(require("../model/Competition"));
class CompetitionBusiness {
    constructor(competitionData, athleteData, idGenerator) {
        this.competitionData = competitionData;
        this.athleteData = athleteData;
        this.idGenerator = idGenerator;
        this.createCompetition = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name } = input;
            if (!input) {
                throw new Error('Please check the fields!.');
            }
            const id = this.idGenerator.generateId();
            const date = new Date();
            const newCompetition = new Competition_1.default(id, name, date);
            yield this.competitionData.insert(newCompetition);
            return id;
        });
        this.finishCompetition = (competitionName) => __awaiter(this, void 0, void 0, function* () {
            if (!competitionName) {
                throw new Error('Please check the fields!.');
            }
            ;
            const competitionWithoutEndedDate = yield this.competitionData.getCompetition(competitionName);
            if (!competitionWithoutEndedDate.length) {
                throw new Error('Competition not found.');
            }
            ;
            const competitionAlreadyEnded = competitionWithoutEndedDate[0].ended_at;
            if (competitionAlreadyEnded) {
                throw new Error('Competition already ended.');
            }
            ;
            const date = new Date();
            yield this.competitionData.finishCompetition(date, competitionName);
            const competitionWithNewEndedDate = yield this.competitionData.getCompetition(competitionName);
            return competitionWithNewEndedDate[0].ended_at;
        });
        this.getRanking = (competitionName) => __awaiter(this, void 0, void 0, function* () {
            if (!competitionName) {
                throw new Error('Please check the fields!.');
            }
            ;
            const competitionAlreadyExist = yield this.athleteData.findCompetition(competitionName);
            if (!competitionAlreadyExist.length) {
                throw new Error('Competition not found.');
            }
            ;
            const ranking = yield this.competitionData.getRanking(competitionAlreadyExist[0].id);
            return ranking[0];
        });
    }
}
exports.default = CompetitionBusiness;
//# sourceMappingURL=CompetitionBusiness.js.map