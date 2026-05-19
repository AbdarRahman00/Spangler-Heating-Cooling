import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const mainAreas = [
  {
    name: "Lake City",
    zip: "49651",
    description: "Our home base. We provide rapid 24/7 emergency service throughout the Lake City area."
  },
  {
    name: "Cadillac",
    zip: "49601",
    description: "Full residential and commercial HVAC services for the Cadillac community."
  },
  {
    name: "McBain",
    zip: "49657",
    description: "Reliable furnace and AC repairs for homeowners in McBain."
  },
  {
    name: "Houghton Lake",
    zip: "48629",
    description: "Expert heating and cooling solutions for the Houghton Lake area."
  }
]

const surroundingAreas = [
  "Falmouth", "Merritt", "Moorestown", "Stittsville", "Lucas", "Prosper", "Vogel Center"
]

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Service Areas Hero */}
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">Service Areas</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Providing top-rated HVAC services to Lake City, MI and surrounding Missaukee County communities.
          </p>
        </div>
      </section>

      {/* Main Areas Grid */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainAreas.map((area) => (
            <div key={area.name} className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">{area.name}, MI</h3>
                </div>
                <span className="text-sm font-bold text-muted-foreground bg-slate-100 px-3 py-1 rounded-full">{area.zip}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
              <Button asChild variant="outline" className="w-fit">
                <Link href="/contact">Schedule Service in {area.name}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Surrounding Areas */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary font-heading mb-4">Other Communities We Serve</h2>
            <p className="text-muted-foreground">Don't see your town? Give us a call at (231) 839-2579 to see if we can help.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {surroundingAreas.map((area) => (
              <div key={area} className="bg-white p-6 rounded-2xl shadow-sm text-center border hover:border-primary transition-colors">
                <span className="font-bold text-secondary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto max-w-7xl px-4 text-center flex flex-col gap-12">
        <h2 className="text-3xl font-bold text-secondary font-heading">Regional Coverage</h2>
        <div className="rounded-3xl overflow-hidden h-[500px] shadow-2xl border relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.436152745348!2d-85.1979339!3d44.3857329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2b2b1b3b3b3b3b%3A0x9b9b9b9b9b9b9b9b!2s6410%20W%20Sanborn%20Rd%2C%20Lake%20City%2C%20MI%2049651!5e0!3m2!1sen!2sus!4v1715850000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
          <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs text-left hidden md:block">
            <h4 className="font-bold text-secondary mb-2">Our Reach</h4>
            <p className="text-sm text-muted-foreground mb-4">We cover a 30-mile radius around Lake City for all residential HVAC needs.</p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <Phone className="h-4 w-4" /> (231) 839-2579
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="bg-primary rounded-3xl p-12 text-white flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Need Fast HVAC Service?</h2>
          <p className="text-lg text-white/80 max-w-2xl">
            We're just a phone call away. Our technicians are likely already in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild variant="orange" size="lg" className="font-bold">
              <Link href="tel:2318392579">Call (231) 839-2579</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="font-bold">
              <Link href="/contact">Book Appointment Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
