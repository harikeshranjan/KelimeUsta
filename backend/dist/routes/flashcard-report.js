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
const express_1 = require("express");
const flashcard_report_1 = __importDefault(require("../models/flashcard-report"));
const router = (0, express_1.Router)();
// Add a new flashcard report
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { word, type } = req.body;
        const flashcardReportExists = yield flashcard_report_1.default.findOne({ word });
        if (flashcardReportExists) {
            res.status(400).json({ message: "Flashcard report already exists" });
            return;
        }
        const newFlashcardReport = yield flashcard_report_1.default.create({ word, type });
        res.status(201).json(newFlashcardReport);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get all flashcard reports
router.get("/get/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const flashcardReports = yield flashcard_report_1.default.find();
        res.status(200).json(flashcardReports);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get a flashcard report by id
router.get("/get/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const flashcardReport = yield flashcard_report_1.default.findById(id);
        if (!flashcardReport) {
            res.status(404).json({ message: "Flashcard report not found" });
            return;
        }
        res.status(200).json(flashcardReport);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// delete a flashcard report by id
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const flashcardReport = yield flashcard_report_1.default.findByIdAndDelete(id);
        if (!flashcardReport) {
            res.status(404).json({ message: "Flashcard report not found" });
            return;
        }
        res.status(200).json({ message: "Flashcard report deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
exports.default = router;
