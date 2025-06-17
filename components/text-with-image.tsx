import { Shield, Zap, Users, TrendingUp } from 'lucide-react'

export function TextWithImage() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl border border-purple-500/20 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
                alt="Blockchain Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">+24%</div>
              <div className="text-sm text-muted-foreground">Growth</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">50K</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Built for the
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Next Generation
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our platform combines cutting-edge blockchain technology with user-friendly interfaces, 
                providing secure and efficient token management solutions for everyone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bank-Level Security</h3>
                  <p className="text-sm text-muted-foreground">Multi-layer encryption and security protocols</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">Instant transactions with minimal fees</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">Governed by our token holders</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">High Returns</h3>
                  <p className="text-sm text-muted-foreground">Competitive staking rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}