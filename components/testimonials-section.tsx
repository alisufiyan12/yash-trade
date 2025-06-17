"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const teamMembers = [
  { id: 1, avatar: "/test-1.jpeg" },
  { id: 2, avatar: "/test-2.jpeg" },
  { id: 3, avatar: "/test3.jpeg" },
  { id: 4, avatar: "/test-4.jpeg" },
  { id: 5, avatar: "/test-5.jpeg" },
  { id: 6, avatar: "/test-6.jpeg" },
  { id: 7, avatar: "/test-7.jpeg" },
  { id: 8, avatar: "/test-8.jpeg" },
  { id: 9, avatar: "/test-9.jpeg" },
  { id: 10, avatar: "/test-10.jpeg" },
  { id: 11, avatar: "/test-11.jpeg" },
  { id: 12, avatar: "/test-12.jpeg" },
  { id: 13, avatar: "/test-13.jpeg" },
  { id: 14, avatar: "/test-14.jpeg" },
  { id: 15, avatar: "/test-15.jpeg" },
  { id: 16, avatar: "/test-16.jpeg" },
  { id: 17, avatar: "/test-17.jpeg" },
  { id: 18, avatar: "/test-18.jpeg" },
  { id: 19, avatar: "/test-19.jpeg" },
  { id: 20, avatar: "/test-20.jpeg" }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  const getVisibleMembers = () => {
    const visible = []
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teamMembers.length
      visible.push(teamMembers[index])
    }
    return visible
  }

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our community members are saying about our platform
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Left Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-[9999] rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:border-accent-foreground/20 shadow-lg"
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          {/* Right Navigation Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-[9999] rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:border-accent-foreground/20 shadow-lg"
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Team Members Carousel */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getVisibleMembers().map((member) => (
                <Card 
                  key={member.id}
                  className="group relative overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/10] overflow-hidden">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage 
                          src={member.avatar} 
                          alt={`Testimonial ${member.id}`}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <AvatarFallback className="w-full h-full rounded-none text-2xl bg-muted">
                          {member.id}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}