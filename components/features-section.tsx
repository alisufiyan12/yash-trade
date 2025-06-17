import { Brain, ChartCandlestick, Trophy, Hammer } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Hammer,
      title: "Developing a Trader’s Mindset",
      description: "Learn to think and react like a professional — with patience, focus, and emotional discipline — the foundation for consistent decision-making in any market condition."
    },
    {
      icon: Brain,
      title: "Understanding Market Behavior",
      description: "Master how price behaves over seconds or minutes, enabling accurate predictions and timely decisions in a fixed-duration trading environment."
    },
    {
      icon: ChartCandlestick,
      title: "Building Daily Trading Routines",
      description: "Discover how to create structured trading habits that improve discipline, reduce overtrading, and increase consistency throughout your sessions."
    },
    {
      icon: Trophy,
      title: "Real-World Risk-to-Reward Planning",
      description: "Learn how to manage trade sizes, control exposure, and set achievable targets — essential skills for compounding success without emotional decisions."
    }
  ]

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Features
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are different from other trading platforms in that we provide 
            secure and efficient token management solutions for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-6">
                  {/* Outer circle with gradient border */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      {/* Inner circle with icon */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}