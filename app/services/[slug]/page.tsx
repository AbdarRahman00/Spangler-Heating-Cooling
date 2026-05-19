import { notFound } from "next/navigation"
import Link from "next/link"
import { servicesData, type ServiceSlug } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Calendar,
  AlertTriangle,
  Lightbulb,
  ListChecks,
  Clock
} from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesData[slug as ServiceSlug]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Service Hero */}
      <section className="bg-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/4"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="max-w-3xl flex flex-col gap-6">
            <Link href="/" className="text-primary font-bold flex items-center gap-2 hover:underline">
              <ArrowRight className="h-4 w-4 rotate-180" /> Back to Home
            </Link>
            <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading">{service.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" variant="orange" className="font-bold">
                <Link href="tel:2318392579">
                  <Phone className="mr-2 h-5 w-5" /> Call for Service
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 bg-transparent font-bold">
                <Link href="/contact">Schedule Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-secondary">Service Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-accent shadow-md">
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-accent font-bold">
                    <AlertTriangle className="h-6 w-6" />
                    <h3 className="text-xl">Signs You Need This Service</h3>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {service.signs.map((sign, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        {sign}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary shadow-md">
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Lightbulb className="h-6 w-6" />
                    <h3 className="text-xl">Benefits of This Service</h3>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 text-secondary font-bold mb-8">
                <ListChecks className="h-8 w-8 text-primary" />
                <h3 className="text-2xl">Our {service.title} Process</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {service.process.map((step, i) => (
                  <div key={i} className="flex flex-col gap-4 relative">
                    <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="font-semibold text-secondary text-sm">{step}</p>
                    {i < service.process.length - 1 && (
                      <div className="hidden md:block absolute top-5 left-10 w-full h-[2px] bg-slate-200 -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            <Card className="bg-primary text-white border-none shadow-xl overflow-hidden">
              <CardContent className="p-8 flex flex-col gap-6 relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Clock className="h-16 w-16" />
                </div>
                <h3 className="text-2xl font-bold">Need Help Now?</h3>
                <p className="text-white/80">
                  We offer 24/7 emergency {service.title} in Lake City and surrounding areas.
                </p>
                <Button asChild variant="orange" size="lg" className="font-bold">
                  <Link href="tel:2318392579">
                    <Phone className="mr-2 h-5 w-5" /> (231) 839-2579
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8 flex flex-col gap-6">
                <h3 className="text-xl font-bold text-secondary">Book Appointment</h3>
                <form className="flex flex-col gap-4">
                  <input type="text" placeholder="Name" className="p-3 bg-slate-50 border rounded-md text-sm" />
                  <input type="text" placeholder="Phone" className="p-3 bg-slate-50 border rounded-md text-sm" />
                  <textarea placeholder="Tell us about the issue" className="p-3 bg-slate-50 border rounded-md text-sm min-h-[80px]"></textarea>
                  <Button type="submit" variant="primary" className="font-bold">
                    <Calendar className="mr-2 h-4 w-4" /> Request Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="bg-slate-50 rounded-xl p-6 flex flex-col gap-4">
              <h4 className="font-bold text-secondary">Service Areas</h4>
              <ul className="grid grid-cols-2 gap-2">
                {["Lake City", "Cadillac", "McBain", "Falmouth"].map((area) => (
                  <li key={area} className="text-xs text-muted-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-accent" /> {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Service */}
      <section className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-bold text-secondary mb-2">How much does {service.title.toLowerCase()} cost?</h4>
              <p className="text-muted-foreground text-sm">Pricing depends on the severity of the issue and parts required. We provide upfront estimates before starting any work.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="font-bold text-secondary mb-2">How long will the repair take?</h4>
              <p className="text-muted-foreground text-sm">Most repairs are completed on the same day. Our trucks are fully stocked with common parts to minimize downtime.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
