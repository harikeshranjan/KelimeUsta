import { Router, Request, Response } from "express";
import flashcardReportModel from "../models/flashcard-report";

const router = Router();

// Add a new flashcard report
router.post("/add", async (req: Request, res: Response) => {
  try {
    const { word, type } = req.body;

    const flashcardReportExists = await flashcardReportModel.findOne({ word });

    if (flashcardReportExists) {
      res.status(400).json({ message: "Flashcard report already exists" });
      return;
    }

    const newFlashcardReport = await flashcardReportModel.create({ word, type });

    res.status(201).json(newFlashcardReport);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get all flashcard reports
router.get("/get/all", async (req: Request, res: Response) => {
  try {
    const flashcardReports = await flashcardReportModel.find();

    res.status(200).json(flashcardReports);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get a flashcard report by id
router.get("/get/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const flashcardReport = await flashcardReportModel.findById(id);

    if (!flashcardReport) {
      res.status(404).json({ message: "Flashcard report not found" });
      return;
    }

    res.status(200).json(flashcardReport);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// delete a flashcard report by id
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const flashcardReport = await flashcardReportModel.findByIdAndDelete(id);

    if (!flashcardReport) {
      res.status(404).json({ message: "Flashcard report not found" });
      return;
    }

    res.status(200).json({ message: "Flashcard report deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

export default router;