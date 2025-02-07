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
const contributors_1 = __importDefault(require("../models/contributors"));
const router = (0, express_1.Router)();
// Add a new contributor
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        const contributorExists = yield contributors_1.default.findOne({ email });
        if (contributorExists) {
            res.status(400).json({ message: "Contributor already exists" });
            return;
        }
        const newContributor = yield contributors_1.default.create({ name, email });
        res.status(201).json(newContributor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get all contributors
router.get("/get/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contributors = yield contributors_1.default.find();
        res.status(200).json(contributors);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Get a contributor by id
router.get("/get/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const contributor = yield contributors_1.default.findById(id);
        if (!contributor) {
            res.status(404).json({ message: "Contributor not found" });
            return;
        }
        res.status(200).json(contributor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
// Delete a contributor by id
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedContributor = yield contributors_1.default.findByIdAndDelete(id);
        if (!deletedContributor) {
            res.status(404).json({ message: "Contributor not found" });
            return;
        }
        res.status(200).json(deletedContributor);
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}));
exports.default = router;
