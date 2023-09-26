"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const productCart_validation_1 = require("./productCart.validation");
const productCart_controller_1 = require("./productCart.controller");
const validateRequestZod_1 = __importDefault(require("../../middlewares/validateRequestZod"));
const router = express_1.default.Router();
router.post('/', (0, validateRequestZod_1.default)(productCart_validation_1.CartValidation.createCartZOdValidation), productCart_controller_1.CartController.createCart);
router.get('/:category', productCart_controller_1.CartController.getCart);
exports.cartRouter = router;
