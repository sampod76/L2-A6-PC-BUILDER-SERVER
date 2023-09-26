"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCRouter = void 0;
const express_1 = __importDefault(require("express"));
const pc_controller_1 = require("./pc.controller");
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const pc_validation_1 = require("./pc.validation");
const router = express_1.default.Router();
router.get('/', pc_controller_1.PCController.getAllPc);
router.post('/', (0, validateRequestZod_1.default)(pc_validation_1.PCValidation.createPcZodSchema), pc_controller_1.PCController.createPc);
router.get('/category', pc_controller_1.PCController.getByCategoryPC);
router.get('/:id', pc_controller_1.PCController.getSinglePc);
router.delete('/:id', pc_controller_1.PCController.deletePC);
exports.PCRouter = router;
