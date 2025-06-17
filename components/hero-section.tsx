"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { YashWatermark } from './yash-watermark'
import { CountUpStats } from './count-up-stats'

export function HeroSection() {
  return (
    <section id="home" className="mt-4 lg:mt-16 pt-16 min-h-[calc(100vh-20vh)] bg-background relative overflow-hidden">
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
                <span className="text-sm font-medium bg-gradient-to-r 
                from-purple-600 to-pink-600 bg-clip-text text-transparent">
                <span className='bg-black dark:bg-white px-4 py-2 rounded-full dark:text-black text-white mr-2'>31% off</span>  Limited time offer                
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
              Earn Smarter with 
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reliable Daily Signals
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
              Receive 8–10 accurate signals daily with our proven, non-martingale strategy.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Join Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  <CountUpStats end={19} suffix="K+" />
                </div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-600">
                  <CountUpStats end={91} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  <CountUpStats end={6} suffix="+ Years" />
                </div>
                <div className="text-sm text-muted-foreground">Market Experience</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[9/16] max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl bg-black relative">
              {/* Watermark */}
              <YashWatermark size="md" className="z-10" />
              
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                controls
              >
                {/* Try both direct DL link formats with appropriate MIME types */}
                <source 
                  src="https://dl.dropboxusercontent.com/scl/fi/je0j4wvy5rwylq4ik45xh/hero-section-video.MOV?rlkey=q0gi4a3n1kqvugczioplcoeot&raw=1" 
                  type="video/quicktime" 
                />
                <source 
                  src="https://dl.dropboxusercontent.com/scl/fi/je0j4wvy5rwylq4ik45xh/hero-section-video.MOV?rlkey=q0gi4a3n1kqvugczioplcoeot&raw=1" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}