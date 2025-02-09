import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ConjugationTable({
  tense,
  ben,
  sen,
  o,
  biz,
  siz,
  onlar,
}: {
  tense: string;
  ben: string[];
  sen: string[];
  o: string[];
  biz: string[];
  siz: string[];
  onlar: string[];
}) {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 shadow-md">
      <Table className='border'>
        <TableCaption className="mb-4">
          {tense}
        </TableCaption>
        <TableHeader>
          <TableRow className="border-b border-gray-200 dark:border-gray-700">
            <TableHead className="w-24 font-bold text-gray-900 dark:text-gray-100">
              Person
            </TableHead>
            {['a/ı', 'e/i', 'o/u', 'ö/ü'].map((header) => (
              <TableHead 
                key={header} 
                className="text-center font-bold text-gray-950 dark:text-gray-100"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { person: 'Ben', suffixes: ben },
            { person: 'Sen', suffixes: sen },
            { person: 'O', suffixes: o },
            { person: 'Biz', suffixes: biz },
            { person: 'Siz', suffixes: siz },
            { person: 'Onlar', suffixes: onlar },
          ].map(({ person, suffixes }, index) => (
            <TableRow 
              key={person}
              className={`
                hover:bg-gray-50 dark:hover:bg-gray-700
                transition-colors duration-150
                border-b border-gray-200 dark:border-gray-700
                ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-950'}
              `}
            >
              <TableCell className="font-medium text-gray-900 dark:text-gray-100">
                {person}
              </TableCell>
              {suffixes.map((suffix, index) => (
                <TableCell 
                  key={index} 
                  className="text-center text-gray-700 dark:text-gray-300"
                >
                  {suffix}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}