"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/useLanguage"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const { language } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2"
        >
          <div className="relative w-4 h-4">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all absolute dark:-rotate-90 dark:scale-0" />
            <Moon className="h-4 w-4 rotate-90 scale-0 transition-all absolute dark:rotate-0 dark:scale-100" />
          </div>
          <span className="flex-1 text-left">
            { theme === "light"
              ? language === 'en' ? 'Light' : language === 'tr' ? 'Açık' : 'Light'
              : theme === "dark"
              ? language === 'en' ? 'Dark' : language === 'tr' ? 'Koyu' : 'Dark'
              : language === 'en' ? 'System' : language === 'tr' ? 'Sistem' : 'System'
            }
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4 mr-2" />
          { language === 'en' ? 'Light' : language === 'tr' ? 'Açık' : 'Light' }
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 mr-2" />
          { language === 'en' ? 'Dark' : language === 'tr' ? 'Koyu' : 'Dark' }
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <svg
            className="h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          { language === 'en' ? 'System' : language === 'tr' ? 'Sistem' : 'System' }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}