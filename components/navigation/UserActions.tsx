"use client"

import { useContext } from "react"
import { UserButton } from "@clerk/nextjs"
import { Bell, Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import LanguageSwitch from "./LanguageSwitch"
import { ThemeContext } from "../../app/ClientThemeProvider"

export default function UserActions({ mounted }: { mounted: boolean }) {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <>
      <LanguageSwitch />
      <Button variant="ghost" size="icon" className="relative" onClick={toggleDarkMode}>
        {mounted && (
          isDarkMode ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary"></span>
      </Button>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}