"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { ModeToggle } from '@/components/ui/mode-toggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-24 h-24 overflow-hidden my-2">
              <a href="/">
              <Image
                src="/dark-mode-logo.png"
                alt="YASH Trading"
                fill
                className="object-contain dark:hidden"
              />
              <Image
                src="/white-mode-logo.png"
                alt="YASH Trading"
                fill
                className="object-contain hidden dark:block"
              />
              </a>
            </div>
            <a href="/">
            <span className="text-xl font-bold">
              YASH TRADING
            </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#analysis" className="text-foreground hover:text-primary transition-colors">
              Analysis
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="/disclaimer" className="text-foreground hover:text-primary transition-colors">
              Disclaimer
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Join Telegram
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#features" className="block text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#analysis" className="block text-foreground hover:text-primary transition-colors">
                Analysis
              </a>
              <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="/disclaimer" className="block text-foreground hover:text-primary transition-colors">
                Disclaimer
              </a>
              <div className="flex items-center py-2">
                <span className="mr-2">Theme:</span>
                <ModeToggle />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Join Telegram
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}