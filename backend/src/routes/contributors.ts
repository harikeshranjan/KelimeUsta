import { Router, Request, Response } from "express";
import contributorsModel from "../models/contributors";

const router = Router();

// Add a new contributor
router.post("/add", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const contributorExists = await contributorsModel.findOne({ email });

    if (contributorExists) {
      res.status(400).json({ message: "Contributor already exists" });
      return;
    }

    const newContributor = await contributorsModel.create({ name, email });

    res.status(201).json(newContributor);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get all contributors
router.get("/get/all", async (req: Request, res: Response) => {
  try {
    const contributors = await contributorsModel.find();

    res.status(200).json(contributors);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Get a contributor by id
router.get("/get/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const contributor = await contributorsModel.findById(id);

    if (!contributor) {
      res.status(404).json({ message: "Contributor not found" });
      return;
    }

    res.status(200).json(contributor);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

// Delete a contributor by id
router.delete("/delete/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedContributor = await contributorsModel.findByIdAndDelete(id);

    if (!deletedContributor) {
      res.status(404).json({ message: "Contributor not found" });
      return;
    }

    res.status(200).json(deletedContributor);
  } catch (error: any) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
});

export default router;