"use client"

import { useState, useEffect, useContext } from "react"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { Bell, Menu, Search, ShoppingBag, Cpu, Users, DollarSign, Moon, Sun } from "lucide-react"
import Logo from "./Logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeContext } from "../layout";
import LanguageSwitch from '@/components/LanguageSwitch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link
                href="/marketplace"
                className="flex items-center space-x-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Marketplace</span>
              </Link>
              <Link
                href="/ai-tools"
                className="flex items-center space-x-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <Cpu className="h-5 w-5" />
                <span>AI Tools</span>
              </Link>
              <Link
                href="/community"
                className="flex items-center space-x-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-5 w-5" />
                <span>Community</span>
              </Link>
              <Link
                href="/plans"
                className="flex items-center space-x-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <DollarSign className="h-5 w-5" />
                <span>Pricing</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/marketplace" className="hidden md:flex items-center space-x-2 text-sm">
            <ShoppingBag className="h-5 w-5" />
            <span>Marketplace</span>
          </Link>
          <Link href="/ai-tools" className="hidden md:flex items-center space-x-2 text-sm">
            <Cpu className="h-5 w-5" />
            <span>AI Tools</span>
          </Link>
          <Link href="/community" className="hidden md:flex items-center space-x-2 text-sm">
            <Users className="h-5 w-5" />
            <span>Community</span>
          </Link>
          <Link href="/plans" className="hidden md:flex items-center space-x-2 text-sm">
            <DollarSign className="h-5 w-5" />
            <span>Pricing</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Logo />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[300px]"
              />
            </div>
          </form>
          {/* <LanguageSwitch /> */}
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
        </div>
      </div>
    </nav>
  )
}
