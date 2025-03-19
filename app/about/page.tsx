import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function About() {
  const clients = [
    {
      name: "Amul",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/375px-Amul_official_logo.svg.png"
    },
    {
      name: "Sumul",
      logo: "https://www.sumul.com/images/sumul-logo.png"
    },
    {
      name: "Surat Municipal Corporation",
      logo: "https://www.suratmunicipal.gov.in/OnlineServices/Images/smc-logo.png"
    },
    {
      name: "DNHDDPCL",
      logo: "https://www.dnhddpcl.in/includes/logos/DNHDDPCL%20Logo.jpg"
    },
    {
      name: "Vimal Agro",
      logo: "https://www.vimalagro.com/wp-content/uploads/2018/02/logo_vimal_agro_foods.png"
    },
    {
      name: "GIZ",
      logo: "https://www.giz.de/static/en/images/giz-logo.gif"
    },
    {
      name: "NDDB Dairy Services",
      logo: "https://www.nddbdairyservices.com/wp-content/uploads/2022/11/NDDB-Dairy-Services-1.png"
    },
    {
      name: "IDMC",
      logo: "https://www.idmc.com/wp-content/uploads/2023/06/idmc-new-logo.png"
    }
  ]

  const stats = [
    { label: "Total Customers", value: "3218+" },
    { label: "Total Work Installed", value: "17+ MW" },
    { label: "Residential Installations", value: "2925+" },
    { label: "Commercial Installations", value: "293+" }
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Swami Solar</h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At Swami Solar, we are dedicated to transforming rooftops into sustainable energy hubs. With 9 years of experience in the solar rooftop installation industry, we take pride in delivering top-quality renewable energy solutions that not only lower energy costs but also contribute to a greener future. Our journey has been fueled by innovation, integrity, and an unwavering commitment to customer satisfaction.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20 bg-primary/5 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We believe that every rooftop holds the potential to become a beacon of clean energy. Our mission is to empower homeowners and businesses alike with efficient, reliable, and eco-friendly solar solutions—creating brighter communities and a healthier planet.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Meet Our Founder: Sanjib Kumar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://media.licdn.com/dms/image/v2/C5603AQHLF8Zhf8p1Ng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517438344207?e=1747872000&v=beta&t=fG3LYM25QbMqiu_5yBZOU2o1bn4QPB3UwBEhZPiC8JQ"
                  alt="Sanjib Kumar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-muted-foreground mb-6">
                  Sanjib Kumar, the visionary behind Swami Solar, brings over 23 years of robust industry experience and a passion for renewable energy. His illustrious career spans roles including:
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <strong>Director at Swami Integrator & Consultants LLP</strong>
                    <p className="mt-1">(Feb 2017 – Present, Surat, India): Steering strategic initiatives and innovative projects in renewable energy.</p>
                  </li>
                  <li>
                    <strong>Director at 4P Consulting</strong>
                    <p className="mt-1">(Jan 2016 – Present): Driving project management and execution with a focus on quality and timely delivery.</p>
                  </li>
                  <li>
                    <strong>Freelance Consultant</strong>
                    <p className="mt-1">(Jan 2016 – Feb 2017): Guiding clients through every stage of complex industrial projects.</p>
                  </li>
                  <li>
                    <strong>General Manager at Essar Steel India Limited</strong>
                    <p className="mt-1">(Aug 1992 – Jan 2016): Leading electrical & automation operations and pioneering process improvements at one of India's top steel majors.</p>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-6">
                  Sanjib's extensive expertise in strategy, project management, and process optimization is complemented by his forward-thinking approach to renewable energy. His leadership is characterized by out-of-the-box thinking, a relentless drive for excellence, and a deep commitment to fostering lasting relationships with clients and stakeholders. This unique blend of experience and passion for sustainability has been the cornerstone of Swami Solar's success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-20 text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl font-semibold italic text-primary">
            "Harness the power of the sun, and let every ray illuminate your path to a sustainable future."
          </blockquote>
          <p className="mt-6 text-muted-foreground">
            This is the spirit that drives us every day at Swami Solar—empowering our clients to invest in a future that's as bright as the energy we create.
          </p>
        </section>

        {/* Clients Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="relative aspect-[3/2] bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground">
            At Swami Solar, we're not just installing solar panels; we're building a legacy of clean energy and innovative solutions. Join us on our journey towards a sustainable tomorrow.
          </p>
        </section>
      </div>
    </div>
  )
}