import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Users, Trophy, History, CheckCircle2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* About Hero */}
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">Our Story</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Locally owned, family-operated, and dedicated to the comfort of our Lake City neighbors.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2070&auto=format&fit=crop"
              alt="Spangler HVAC Office"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">Serving Lake City Since [Year]</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Spangler Heating & Cooling was founded on a simple principle: provide honest, high-quality HVAC service at a fair price. As a local business, we know that our reputation is everything, and we've built ours one happy customer at a time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of licensed technicians brings years of experience to every job, from complex commercial installations to residential emergency repairs. We're not just your HVAC contractors; we're your neighbors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-secondary">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-secondary">Locally Operated</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-secondary">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-secondary">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary font-heading">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg text-center p-8">
              <CardContent className="flex flex-col gap-6 pt-0">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in honest work and transparent pricing. No upsells, no hidden fees—just what you need to stay comfortable.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg text-center p-8">
              <CardContent className="flex flex-col gap-6 pt-0">
                <div className="h-16 w-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We take pride in our craftsmanship. Every repair and installation is performed to the highest industry standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg text-center p-8">
              <CardContent className="flex flex-col gap-6 pt-0">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We are proud to be part of the Lake City community and support local initiatives whenever we can.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="bg-primary rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Experience the Spangler Difference</h2>
            <p className="text-lg text-white/80">
              Join the hundreds of happy homeowners who trust us with their heating and cooling needs.
            </p>
          </div>
          <Button asChild variant="orange" size="lg" className="font-bold text-lg">
            <Link href="tel:2318392579">
              <Phone className="mr-2 h-5 w-5" /> Call (231) 839-2579
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
