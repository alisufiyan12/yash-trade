"use client"

import { Button } from '@/components/ui/button'
import { Play, ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 h-full flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🚀 Next Generation Token Platform
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital Finance
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join the industry leaders to discuss where the markets are heading. 
                We accept token payments and provide secure, innovative financial solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-purple-600">500K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">$2B+</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-[9/16] max-w-sm mx-auto bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-black/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                <Button size="lg" variant="ghost" className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20">
                  <Play className="w-6 h-6 text-white ml-1" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-sm font-medium">Token Introduction</div>
                    <div className="text-white/70 text-xs">Learn about our platform</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}