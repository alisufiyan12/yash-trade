"use client"

import { Shield, Zap, Users, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export function TextWithImage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative border border-purple-500/20 rounded-lg over">
            <div className="w-full h-full overflow-hidden shadow-xl 
            bg-black border border-purple-500/20 rounded-lg overflow-hidden">
              <Image
                src="/analysis-ss.jpeg"
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 
              pointer-events-none" />
              
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 
              rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 
              rounded-full animate-pulse" />
              </div>
            
            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">+73%</div>
              <div className="text-sm text-muted-foreground">Growth</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">$50K</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                How we are
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Different
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We are different from other trading platforms in that we provide 
                secure and efficient token management solutions for everyone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Non-Martingale Approach</h3>
                  <p className="text-sm text-muted-foreground">Our signals ensure accuracy and consistency using a non-martingale strategy — helping you earn a minimum of $100 daily</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Smart Risk Management – No Martingale</h3>
                  <p className="text-sm text-muted-foreground">We never double trades after losses. Every signal uses proper risk control to protect your capital.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">High-Accuracy Trade Setups</h3>
                  <p className="text-sm text-muted-foreground">Each trade is based on solid analysis — not random entries or emotional decisions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Sustainable, Consistent Growth</h3>
                  <p className="text-sm text-muted-foreground">We aim for steady profits without risky doubling strategies — safe, long-term results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}