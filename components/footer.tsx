import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-border text-slate-800 dark:text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-24 h-24">
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
              </div>
              <span className="text-xl font-bold">YASH TRADING</span>
            </div>
            <p className="dark:text-white/70 text-slate-800 mb-6">
              Premium Telegram trading signals for Quotex markets. 
              <br/> Join thousands of successful traders worldwide.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="dark:hover:bg-white/10 hover:bg-slate-100/80 text-slate-700 dark:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="dark:hover:bg-white/10 hover:bg-slate-100/80 text-slate-700 dark:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="dark:hover:bg-white/10 hover:bg-slate-100/80 text-slate-700 dark:text-white">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="dark:hover:bg-white/10 hover:bg-slate-100/80 text-slate-700 dark:text-white">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>


          {/* Newsletter */}
          <div className='flex flex-col text-start items-start'>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="dark:text-white/70 text-slate-800 mb-4">
              Get the latest market insights and trading tips directly in your inbox.
            </p>
            <div className="flex gap-2">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Join Now!
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t dark:border-white/20 border-slate-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="dark:text-white/70 text-slate-800 text-sm">
              {new Date().getFullYear()} <a className='text-primary hover:text-primary/80' href="https://brinsolagency.netlify.app/">Brinsol</a>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/disclaimer" className="dark:text-white/70 text-slate-700 dark:hover:text-white hover:text-slate-900 text-sm transition-colors">
                Trading Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}