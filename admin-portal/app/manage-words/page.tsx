"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  MoreVertical,
  Pencil,
  Trash2,
  Search,
  Plus,
  FileDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface Word {
  _id: number;
  word: string;
  meaning: string;
  type: string;
  example: string;
  exampleMeaning: string;
}

export default function ManageWordsPage() {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const router = useRouter();

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
  }, []);

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
          Showing {startIndex + 1} to {Math.min(endIndex, filteredWords.length)} of {filteredWords.length} entries
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

  return (
    <div className="min-h-screen ml-0 md:ml-64 flex flex-col p-4 md:p-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Manage Words
          </h1>
        </div>

        <Card className="border-purple-100 dark:border-purple-900">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl font-semibold">Word Collection</CardTitle>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input
                    placeholder="Search words..."
                    onChange={(e) => debouncedSearch(e.target.value)}
                    className="pl-8 w-full md:w-[250px]"
                  />
                </div>
                <div className="flex gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      <DropdownMenuItem>Type</DropdownMenuItem>
                      <DropdownMenuItem>Ascending</DropdownMenuItem>
                      <DropdownMenuItem>Descending</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileDown className="h-4 w-4" />
                    Export
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700" 
                    onClick={() => router.push("/add-words")}
                  >
                    <Plus className="h-4 w-4" />
                    Add Word
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
              <div className="text-center py-4">Loading...</div>
            ) : (
              <>
                <div className="rounded-md border">
                  <Table className="w-[40rem] md:w-full">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-16 text-center">S.No</TableHead>
                        <TableHead>Word</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Meaning</TableHead>
                        <TableHead>Example</TableHead>
                        <TableHead className="w-24 text-center">Actions</TableHead>
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
                                    onClick={() => router.push(`/edit-word/${word._id}`)}
                                  >
                                    <Pencil className="h-4 w-4" /> Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    className="flex items-center gap-2 text-red-600 dark:text-red-400"
                                    onClick={() => handleDelete(word._id)}
                                  >
                                    <Trash2 className="h-4 w-4" /> Delete
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
    </div>
  );
}