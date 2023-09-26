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
exports.PCController = void 0;
const catchAsync_1 = __importDefault(require("../../share/catchAsync"));
const sendResponse_1 = __importDefault(require("../../share/sendResponse"));
const pc_model_1 = require("./pc.model");
const pc_service_1 = require("./pc.service");
const createPc = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pc_service_1.PCService.createPcServicesFromDb(req.body);
    if (result) {
        (0, sendResponse_1.default)(res, {
            success: true,
            message: 'successfully create PC',
            statusCode: 200,
            data: result,
        });
    }
}));
const getAllPc = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield pc_model_1.PC.find({});
    (0, sendResponse_1.default)(res, {
        success: true,
        message: 'successfully get PCs',
        statusCode: 200,
        data: data,
    });
}));
const getSinglePc = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pc_service_1.PCService.getSinglePcFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'PC recieved successfully !',
        data: result,
    });
}));
const getByCategoryPC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.query.category;
    const result = yield pc_service_1.PCService.getByCategoryFromDb(category);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'PC category successfully !',
        data: result,
    });
}));
const deletePC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pc_service_1.PCService.deletePCFromDb(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'PC deleted successfully !',
        data: result,
    });
}));
exports.PCController = {
    createPc,
    getAllPc,
    getSinglePc,
    deletePC,
    getByCategoryPC
};
