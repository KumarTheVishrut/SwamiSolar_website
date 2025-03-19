import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Residential Solar Installation",
      description: "Complete solar solutions for homes, including design, installation, and maintenance.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Commercial Solar Projects",
      description: "Large-scale solar installations for businesses and industrial facilities.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Solar System Design and Consultation",
      description: "Expert consultation and custom system design to maximize energy production for your specific needs.",
      image: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Solar Battery and Backup Solutions",
      description: "Advanced energy storage systems to ensure continuous power supply during outages.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Solar EPC Services",
      description: "End-to-end project management from engineering to commissioning.",
      image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Solar Financing and Subsidiary Assistance",
      description: "Comprehensive support for financing options and guidance on available subsidies and incentives.",
      image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Maintenance & Support",
      description: "Regular maintenance, monitoring, and support services for solar installations.",
      image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?q=80&w=2000&auto=format&fit=crop"
    }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h2>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}