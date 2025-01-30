"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vocabSchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    meaning: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
    },
    example: {
        type: String,
        required: true,
        trim: true,
    },
    exampleMeaning: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const vocabsModel = (0, mongoose_1.model)("Vocab", vocabSchema);
exports.default = vocabsModel;
