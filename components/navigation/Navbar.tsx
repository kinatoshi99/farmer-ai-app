"use client"

import { useState, useEffect } from "react"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import NavLinks from "./NavLinks"
import SearchBar from "./SearchBar"
import UserActions from "./UserActions"

export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileMenu />
        <NavLinks />
        <div className="flex flex-1 items-center justify-center">
          <Logo />
        </div>
        <div className="flex items-center justify-end space-x-4">
          <SearchBar />
          <UserActions mounted={mounted} />
        </div>
      </div>
    </nav>
  )
}