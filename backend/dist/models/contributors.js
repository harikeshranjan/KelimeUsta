"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contributorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});
const ContributorModel = (0, mongoose_1.model)("Contributor", contributorSchema);
exports.default = ContributorModel;
