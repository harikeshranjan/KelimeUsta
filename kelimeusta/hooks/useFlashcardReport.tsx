"use client";

import { useState, createContext, Dispatch, SetStateAction, useContext } from "react";

interface FlashcardReport {
  word: string;
  type: "spelling" | "meaning" | "example" | "exampleMeaning" | "none";
}

const FlashcardReportContext = createContext<{
  report: FlashcardReport;
  setReport: Dispatch<SetStateAction<FlashcardReport>>;
}>({
  report: { word: "", type: "none" },
  setReport: () => {},
});

export const useFlashcardReport = () => {
  return useContext(FlashcardReportContext);
}

export const FlashcardReportProvider = ({ children }: { children: React.ReactNode}) => {
  const [report, setReport] = useState<FlashcardReport>({ word: "", type: "none" })

  const value = {
    report,
    setReport,
  }

  return (
    <FlashcardReportContext.Provider value={value}>
      {children}
    </FlashcardReportContext.Provider>
  )
}