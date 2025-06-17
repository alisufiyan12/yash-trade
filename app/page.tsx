import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TextWithImage } from '@/components/text-with-image'
import { FeaturesSection } from '@/components/features-section'
import { AnalysisSection } from '@/components/analysis-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TextWithImage />
      <FeaturesSection />
      <AnalysisSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}