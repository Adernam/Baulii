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
const BaseDatabase_1 = require("./BaseDatabase");
class CompetitionData extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'jogos_olimpicos_competicao';
        this.insert = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this
                    .connection(this.TABLE_NAME)
                    .insert(post);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error('Database error!');
                }
                ;
            }
            ;
        });
        this.finishCompetition = (date, competitionName) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this
                    .connection(this.TABLE_NAME)
                    .where({ name: competitionName })
                    .update({
                    ended_at: date
                });
            }
            catch (_a) {
                throw new Error('Database error!');
            }
            ;
        });
        this.getCompetition = (competitionName) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this
                    .connection(this.TABLE_NAME)
                    .select()
                    .where({ name: competitionName });
                return result;
            }
            catch (error) {
                throw new Error('Database error!');
            }
            ;
        });
        this.getRanking = (competitionId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.connection.raw(`
                SELECT name, value
                FROM jogos_olimpicos_athletes
                WHERE competition_id = '${competitionId}'
                ORDER BY value DESC
            `);
                return result;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error('Database error!');
                }
                ;
            }
            ;
        });
    }
}
exports.default = CompetitionData;
;
//# sourceMappingURL=CompetitionData.js.map