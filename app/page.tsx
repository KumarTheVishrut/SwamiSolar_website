import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Battery, Zap, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop"
          alt="Solar Panels"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Powering a Sustainable Future</h1>
            <p className="text-xl mb-8">Leading Solar EPC Company for Rooftop Installations</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Swami Solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sun className="h-12 w-12 text-primary" />,
                title: "Expert Installation",
                description: "Professional installation by certified technicians"
              },
              {
                icon: <Battery className="h-12 w-12 text-primary" />,
                title: "Quality Products",
                description: "Top-tier solar panels and equipment"
              },
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Maximum Efficiency",
                description: "Optimal design for maximum power generation"
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "25 Year Warranty",
                description: "Long-term warranty and maintenance support"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent>
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to Solar?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get a free consultation and estimate for your solar installation
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}