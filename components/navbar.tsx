"use client"

import { Sun, Moon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <nav className="border-b bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Swami </span>
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Swami Solar</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="bg-primary/10 hover:bg-primary/20"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-primary/10 hover:bg-primary/20"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme}
                className="bg-primary/10 hover:bg-primary/20 w-10"
              >
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}