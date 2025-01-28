import { Router, Request, Response } from "express";
import vocabsModel from "../models/vocabs";

const router = Router();

// Add a new vocabulary
router.post("/add", async (req: Request, res: Response) => {
  try {
    const { word, meaning, type, example, exampleMeaning } = req.body;

    const wordExists = await vocabsModel.findOne({ word });

    if (wordExists) {
      res.status(400).json({ message: "Word already exists" });
      return;
    }

    const newVocab = await vocabsModel.create({ word, meaning, type, example, exampleMeaning });

    res.status(201).json(newVocab);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get all vocabularies
router.get("/get/all", async (req: Request, res: Response) => {
  try {
    const vocabs = await vocabsModel.find();

    res.status(200).json(vocabs);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get a vocabulary by id
router.get("/get/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const vocab = await vocabsModel.findById(id);

    if (!vocab) {
      res.status(404).json({ message: "Vocabulary not found" });
      return;
    }

    res.status(200).json(vocab);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// randomly get a vocabulary from the list
router.get("/random", async (req: Request, res: Response) => {
  try {
    const randomVocab = await vocabsModel.aggregate([
      { $sample: { size: 1 } }, // Randomly pick 1 document
    ]);

    if (randomVocab.length === 0) {
      res.status(404).json({ message: "No vocabularies found" });
      return;
    }

    res.status(200).json(randomVocab[0]); // Since $sample returns an array, get the first element
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Update a vocabulary by id
router.put("/update/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { word, meaning, type, example, exampleMeaning } = req.body;

    const updatedVocab = await vocabsModel.findByIdAndUpdate(id, { word, meaning, type, example, exampleMeaning }, { new: true });

    if (!updatedVocab) {
      res.status(404).json({ message: "Vocabulary not found" });
      return;
    }

    res.status(200).json(updatedVocab);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Delete a vocabulary by id
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedVocab = await vocabsModel.findByIdAndDelete(id);

    if (!deletedVocab) {
      res.status(404).json({ message: "Vocabulary not found" });
      return;
    }

    res.status(200).json(deletedVocab);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

export default router;
