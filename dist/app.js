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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorhandler_1 = __importDefault(require("./app/middlewares/globalErrorhandler"));
const notFountRoute_1 = require("./app/middlewares/notFountRoute");
const app = (0, express_1.default)();
// parser
app.use((0, cors_1.default)({ origin: ["https://portfolio-pink-ten-95.vercel.app", "https://portfolio-dashboard-one.vercel.app"], credentials: true }));
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello user');
}));
app.use(globalErrorhandler_1.default);
app.use(notFountRoute_1.notFountRoute);
exports.default = app;
