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
const vocabs_1 = __importDefault(require("../models/vocabs"));
const router = (0, express_1.Router)();
// Add a new vocabulary
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { word, meaning, type, example, exampleMeaning } = req.body;
        const wordExists = yield vocabs_1.default.findOne({ word });
        if (wordExists) {
            res.status(400).json({ message: "Word already exists" });
            return;
        }
        const newVocab = yield vocabs_1.default.create({ word, meaning, type, example, exampleMeaning });
        res.status(201).json(newVocab);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get all vocabularies
router.get("/get/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vocabs = yield vocabs_1.default.find();
        res.status(200).json(vocabs);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get a vocabulary by id
router.get("/get/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vocab = yield vocabs_1.default.findById(id);
        if (!vocab) {
            res.status(404).json({ message: "Vocabulary not found" });
            return;
        }
        res.status(200).json(vocab);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// randomly get a vocabulary from the list
router.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomVocab = yield vocabs_1.default.aggregate([
            { $sample: { size: 1 } }, // Randomly pick 1 document
        ]);
        if (randomVocab.length === 0) {
            res.status(404).json({ message: "No vocabularies found" });
            return;
        }
        res.status(200).json(randomVocab[0]); // Since $sample returns an array, get the first element
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Update a vocabulary by id
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { word, meaning, type, example, exampleMeaning } = req.body;
        const updatedVocab = yield vocabs_1.default.findByIdAndUpdate(id, { word, meaning, type, example, exampleMeaning }, { new: true });
        if (!updatedVocab) {
            res.status(404).json({ message: "Vocabulary not found" });
            return;
        }
        res.status(200).json(updatedVocab);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Delete a vocabulary by id
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedVocab = yield vocabs_1.default.findByIdAndDelete(id);
        if (!deletedVocab) {
            res.status(404).json({ message: "Vocabulary not found" });
            return;
        }
        res.status(200).json(deletedVocab);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
exports.default = router;
