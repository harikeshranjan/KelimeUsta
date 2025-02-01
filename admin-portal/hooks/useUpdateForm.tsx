"use client";

import React, { useState, createContext, useContext } from 'react';

const UpdateFormContext = createContext({
  isUpdateFormOpen: false,
  toggleUpdateForm: () => {},
  sId: '',
  setSId: (id: string) => {},
  sWord: '',
  setSWord: (word: string) => {},
  sMeaning: '',
  setSMeaning: (meaning: string) => {},
  sWordType: '',
  setSWordType: (wordType: string) => {},
  sExample: '',
  setSExample: (example: string) => {},
  sExampleTranslation: '',
  setSExampleTranslation: (exampleTranslation: string) => {},
});

export const useUpdateForm = () => {
  return useContext(UpdateFormContext);
}

export const UpdateFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState<boolean>(false);
  const [sId, setSId] = useState<string>('');
  const [sWord, setSWord] = useState<string>('');
  const [sMeaning, setSMeaning] = useState<string>('');
  const [sWordType, setSWordType] = useState<string>('');
  const [sExample, setSExample] = useState<string>('');
  const [sExampleTranslation, setSExampleTranslation] = useState<string>('');

  const toggleUpdateForm = () => {
    setIsUpdateFormOpen(!isUpdateFormOpen);
  };

  const values = {
    isUpdateFormOpen,
    toggleUpdateForm,
    sId,
    setSId,
    sWord,
    setSWord,
    sMeaning,
    setSMeaning,
    sWordType,
    setSWordType,
    sExample,
    setSExample,
    sExampleTranslation,
    setSExampleTranslation,
  }

  return (
    <UpdateFormContext.Provider value={values}>
      {children}
    </UpdateFormContext.Provider>
  )
};