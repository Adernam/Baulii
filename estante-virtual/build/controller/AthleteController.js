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
class UserController {
    constructor(athleteBusiness) {
        this.athleteBusiness = athleteBusiness;
        this.createAthlete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { competition, name, value, unity } = req.body;
            const input = {
                competition,
                name,
                value,
                unity
            };
            try {
                const athlete = yield this.athleteBusiness.create(input);
                res.status(201).send({ message: 'Athlete created successfully', athlete });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send('Signup error.');
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=AthleteController.js.map