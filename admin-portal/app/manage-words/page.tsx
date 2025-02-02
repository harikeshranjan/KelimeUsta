"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, MoreVertical, Pencil, Trash2, Search, Plus, FileDown, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, } from "lucide-react";
import { convertToCSV, downloadCSV, DataRow } from "@/lib/export";
import { useLanguage } from "@/hooks/useLanguage";
import UpdateForm from "@/components/update-form";
import { useUpdateForm } from "@/hooks/useUpdateForm";
import { useToast } from "@/hooks/use-toast";

interface Word extends DataRow {
  _id: number;
  word: string;
  meaning: string;
  type: string;
  example: string;
  exampleMeaning: string;
}

export default function ManageWordsPage() {
  const [exporting, setExporting] = useState(false);
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const router = useRouter();
  const { language } = useLanguage();
  const { isUpdateFormOpen, toggleUpdateForm, setSId, setSWord, setSMeaning, setSWordType, setSExample, setSExampleTranslation } = useUpdateForm();
  const { toast } = useToast();

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setLoading(true);
        setError(null);
        // Replace with your actual API endpoint
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/vocabs/get/all`);
        if (!response.ok) {
          throw new Error('Failed to fetch words');
        }
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to load words. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, [
    isUpdateFormOpen,
    toggleUpdateForm,
  ]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
      setCurrentPage(1);
    }, 300),
    []
  );

  // Filter words based on search
  const filteredWords = words.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.example.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredWords.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWords = filteredWords.slice(startIndex, endIndex);

  // Handle page changes
  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const handleDelete = async (wordId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/vocabs/delete/${wordId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete word');
      }

      setWords(prevWords => prevWords.filter(word => word._id !== wordId));
    } catch (error) {
      console.error("Failed to delete word:", error);
    }
  };

  const PaginationControls = () => (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-4">
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span>
          {language === "en" ? "Showing" : "Gösteriliyor"}{" "} {startIndex + 1}{" "} {language === "en" ? "to" : "ile"}{" "} {Math.min(endIndex, filteredWords.length)}{" "} {language === "en" ? "of" : "arasi"}{" "} {filteredWords.length}{" "} {language === "en" ? "words" : "kelime"}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(pageNum)}
                className={currentPage === pageNum ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  const handleExport = () => {
    // defining headers mapping
    const header = {
      word: "Word",
      type: "Type",
      meaning: "Meaning",
      example: "Example",
      exampleMeaning: "Example Meaning",
    }

    try {
      // set exporting state to true
      setExporting(true);

      // convert filtered data to CSV
      const csvContent = convertToCSV(filteredWords, header);

      // generate a filename with the current date
      const date = new Date().toISOString().split('T')[0];
      const filename = `kelime-usta -${date}.csv`;

      // trigger download
      downloadCSV(csvContent, filename);
    } catch (error) {
      console.error("Failed to export data:", error);
    } finally {
      // set exporting state to false
      setExporting(false);
    }
  };

  const fetchWordsById = async (wordId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/vocabs/get/${wordId}`);
      if (!response.ok) {
        toast({
          title: "Error",
          description: "Failed to fetch word",
          variant:"destructive",
          duration: 5000,
        })
      }
      
      if (response.ok) {
        const data = await response.json();
        setSId(data._id);
        setSWord(data.word);
        setSMeaning(data.meaning);
        setSWordType(data.type);
        setSExample(data.example);
        setSExampleTranslation(data.exampleMeaning);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  }

  const updateWord = async (wordId: number) => {
    toggleUpdateForm();
    fetchWordsById(wordId);
  }

  const wordTypes = [
    { value: "noun", label: "Noun", trLabel: "İsim", kuLabel: "Nav" },
    { value: "verb", label: "Verb", trLabel: "Fiil", kuLabel: "Lêker" },
    { value: "adjective", label: "Adjective", trLabel: "Sıfat", kuLabel: "Navder" },
    { value: "adverb", label: "Adverb", trLabel: "Zarf", kuLabel: "Rengpêş" },
    { value: "conjunction", label: "Conjunction", trLabel: "Bağlaç", kuLabel: "Têkilî" },
    { value: "preposition", label: "Preposition", trLabel: "Edat", kuLabel: "Laçik" },
    { value: "interjection", label: "Interjection", trLabel: "Ünlem", kuLabel: "Têkîl" },
    { value: "pronouns", label: "Pronouns", trLabel: "Zamir", kuLabel: "Cînavk" },
  ] as const;

  return (
    <div className="relative min-h-screen mt-16 md:mt-12 ml-0 md:ml-64 flex flex-col p-4 md:p-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {language === "en" ? "Manage Words" : language === "tr" ? "Kelimeleri Yönet" : "Peyv birêve bibin"}
          </h1>
        </div>

        <Card className="border-purple-100 dark:border-purple-900">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl font-semibold">
                {language === "en" ? "Word Collection" : language === "tr" ? "Kelime Koleksiyonu" : "Koleksiyona Peyvên"}{" "}
              </CardTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    placeholder={language === "en" ? "Search words" : language === "tr" ? "Kelimeleri ara" : "Peyvên lêgerînê"}
                    onChange={(e) => debouncedSearch(e.target.value)}
                    className="pl-8 w-full md:w-[250px]"
                  />
                </div>
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        {language === "en" ? "Filter" : language === "tr" ? "Filtrele" : "Parzûn"}{" "}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuItem onClick={() => setSearchTerm("")}>{language === "en" ? "All" : language === "tr" ? "Hepsi" : "Gişt"}</DropdownMenuItem>
                      {wordTypes.map((type) => (
                        <DropdownMenuItem
                          key={type.value}
                          onClick={() => setSearchTerm(type.label)}
                        >
                          {language === "en" ? type.label : language === "tr" ? type.trLabel : type.kuLabel}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={handleExport}
                    disabled={exporting || words.length === 0}
                  >
                    {exporting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        {language === "en" ? "Exporting..." : language === "ku" ? "Dışa Aktarılıyor..." : "Hinardekirin..."}
                      </>
                    ) : (
                      <>
                        <FileDown className="h-4 w-4" />
                        {language === "en" ? "Export" : language === "tr" ? "Dışa Aktar" : "Eksport"}{" "}
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
                    onClick={() => router.push("/add-words")}
                  >
                    <Plus className="h-4 w-4" />
                    {language === "en" ? "Add Word" : language === "tr" ? "Kelime Ekle" : "Peyvê Zêde Bike"}
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="text-red-600 text-center py-4">{error}</div>
            )}
            {loading ? (
              <div className="text-center py-4">
                <span className="animate-pulse">⏳</span>{" "}
                {language === "en" ? "Loading words..." : language === "tr" ? "Kelimeler yükleniyor..." : "Peyvên lêgerînê hatin barkirin..."}
              </div>
            ) : (
              <>
                <div className="rounded-md border">
                  <Table className="w-[40rem] md:w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16 text-center">{language === "en" ? "S.No" : "S.No"}</TableHead>
                        <TableHead>{language === "en" ? "Word" : language === "tr" ? "Kelime" : "Peyv"}</TableHead>
                        <TableHead>{language === "en" ? "Type" : language === "tr" ? "Tür" : "Cins"}</TableHead>
                        <TableHead>{language === "en" ? "Meaning" : language === "tr" ? "Anlam" : "Mane"}</TableHead>
                        <TableHead>{language === "en" ? "Example" : language === "tr" ? "Örnek" : "Mînak"}</TableHead>
                        <TableHead className="w-24 text-center">{language === "en" ? "Actions" : language === "tr" ? "İşlemler" : "Çalakî"}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentWords.map((word, index) => (
                        <TableRow key={word._id}>
                          <TableCell className="text-center font-medium">
                            {startIndex + index + 1}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{word.word}</div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm">{word.type}</div>
                          </TableCell>
                          <TableCell>{word.meaning}</TableCell>
                          <TableCell>
                            <div className="max-w-xs">
                              <div className="font-medium">{word.example}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {word.exampleMeaning}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-center">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    className="flex items-center gap-2"
                                    onClick={() => updateWord(word._id)}
                                  >
                                    <Pencil className="h-4 w-4" /> {language === "en" ? "Edit" : language === "tr" ? "Düzenle" : "Weşandin"}
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    className="flex items-center gap-2 text-red-600 dark:text-red-400"
                                    onClick={() => handleDelete(word._id)}
                                  >
                                    <Trash2 className="h-4 w-4" /> {language === "en" ? "Delete" : language === "tr" ? "Sil" : "Jêbirin"}
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <PaginationControls />
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {isUpdateFormOpen && <UpdateForm onClose={toggleUpdateForm} />}
    </div>
  );
}