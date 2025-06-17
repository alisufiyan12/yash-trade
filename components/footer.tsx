import { Coins, Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TokenFlow</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              The next generation token platform that combines security, innovation,<br/> and user experience 
              to deliver the best digital finance solutions.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

         
          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-white/70">hello@tokenflow.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-white/70">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-white/70">San Francisco, CA</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-white/70 text-sm mb-3">Stay updated with our latest news and updates.</p>
              <div className="flex space-x-2">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Join Channel
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <a href='https://brinsolagency.netlify.app/' className="text-white/60 text-sm ">
            © {new Date().getFullYear()} <span className='text-white/60 hover:text-white text-sm transition-colors'>Brinsol</span>. All rights reserved.
          </a>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}