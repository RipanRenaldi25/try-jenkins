"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send('oke');
});
app.use('/', router);
app.listen(3000, () => console.log('Running on port 3000'));
