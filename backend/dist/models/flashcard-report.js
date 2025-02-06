"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const flashcardReportSchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const flashcardReportModel = (0, mongoose_1.model)("FlashcardReport", flashcardReportSchema);
exports.default = flashcardReportModel;
