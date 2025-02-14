"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const vocabs_1 = __importDefault(require("./routes/vocabs"));
const flashcard_report_1 = __importDefault(require("./routes/flashcard-report"));
const contributors_1 = __importDefault(require("./routes/contributors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.options("*", (0, cors_1.default)()); // include before other routes
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: [
        process.env.CLIENT_URL,
        process.env.ADMIN_URL,
        "http://localhost:3000",
    ],
    credentials: true,
}));
mongoose_1.default.connect(process.env.MONGO_URI, { dbName: "KelimeUsta" })
    .then(() => console.log("[db]: Connected to database"))
    .catch((err) => console.log("[db]: Database connection failed", err));
app.use("/vocabs", vocabs_1.default);
app.use("/flashcards", flashcard_report_1.default);
app.use("/contributors", contributors_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
