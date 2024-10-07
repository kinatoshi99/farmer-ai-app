"use client"

import Link from "next/link"
import { ShoppingBag, Cpu, Users, DollarSign, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/marketplace", icon: ShoppingBag, label: "Marketplace" },
  { href: "/ai-tools", icon: Cpu, label: "AI Tools" },
  { href: "/community", icon: Users, label: "Community" },
  { href: "/plans", icon: DollarSign, label: "Pricing" },
]

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <div className="hidden md:flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-1">
              <span>Explore</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navItems.map((item) => (
              <DropdownMenuItem key={item.href}>
                <Link href={item.href} className="flex items-center space-x-2 w-full">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-2 text-sm py-2"
            onClick={onClick}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  )
}