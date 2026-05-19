import Link from "next/link"
import Image from "next/image"
import { 
  Phone, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Clock, 
  ThumbsUp, 
  Wrench, 
  ThermometerSnowflake, 
  Flame, 
  Wind,
  CheckCircle2,
  Calendar,
  MapPin
} from "lucide-react"
import * as motion from "framer-motion/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const services = [
  {
    title: "Furnace Repair",
    description: "Keep your home warm with our fast, reliable heating repair services.",
    icon: Flame,
    href: "/services/furnace-repair",
    image: "/furnace.png"
  },
  {
    title: "AC Repair",
    description: "Stay cool during Michigan summers with expert air conditioning repairs.",
    icon: ThermometerSnowflake,
    href: "/services/ac-repair",
    image: "/ac.png"
  },
  {
    title: "Boiler Services",
    description: "Specialized boiler repair, installation, and maintenance for all systems.",
    icon: Wrench,
    href: "/services/boiler-repair",
    image: "/boiler.png"
  },
  {
    title: "Duct Cleaning",
    description: "Breathe cleaner air with our professional duct cleaning services.",
    icon: Wind,
    href: "/services/air-duct-cleaning",
    image: "/ducts.png"
  }
]

const testimonials = [
  {
    name: "John D.",
    location: "Lake City, MI",
    text: "Spangler Heating & Cooling saved us during a mid-winter furnace failure. They were here within an hour and had us back in the heat quickly. Highly recommend!",
    rating: 5
  },
  {
    name: "Sarah M.",
    location: "Cadillac, MI",
    text: "Professional, honest, and fair pricing. They installed our new AC unit and did a fantastic job. The technician was very knowledgeable.",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "McBain, MI",
    text: "Great local company. They've been maintaining our boiler for years and we've never had an issue. Reliable and friendly service every time.",
    rating: 5
  }
]

const faqs = [
  {
    question: "How quickly can you respond to an emergency?",
    answer: "We offer 24/7 emergency services and typically respond within 1-2 hours depending on your location in Lake City or surrounding areas."
  },
  {
    question: "Do you offer free estimates on new installations?",
    answer: "Yes, we provide free, no-obligation estimates for all new furnace, AC, and boiler installations."
  },
  {
    question: "Are you licensed and insured in Michigan?",
    answer: "Absolutely. We are fully licensed and insured HVAC contractors operating in Michigan, ensuring your home is in safe hands."
  },
  {
    question: "What brands do you service?",
    answer: "We service and repair all major HVAC brands, including Trane, Carrier, Lennox, Goodman, and more."
  }
]

const serviceAreas = [
  "Lake City", "Cadillac", "McBain", "Falmouth", "Houghton Lake", "Merritt", "Moorestown"
]

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="HVAC Technician working"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-7xl px-4 relative z-10"
        >
          <div className="max-w-2xl text-white flex flex-col gap-6">
            <Badge variant="emergency" className="w-fit text-sm py-1 px-4">
              <Clock className="mr-2 h-4 w-4" /> 24/7 Emergency Service Available
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading">
              Trusted HVAC Experts in <span className="text-primary">Lake City, MI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              Professional heating and cooling solutions for your home. Same-day service, honest pricing, and 5-star quality you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" variant="orange" className="text-lg font-bold">
                <Link href="tel:2318392579">
                  <Phone className="mr-2 h-5 w-5" /> Call (231) 839-2579
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg font-bold bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/contact">
                  Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5-Star Google Rating</span>
              </div>
              <div className="h-10 w-[1px] bg-white/20"></div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold">Locally Owned</span>
                <span className="text-xs text-slate-300 uppercase tracking-wider">Michigan Trusted</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="container mx-auto max-w-7xl px-4 -mt-36 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 border">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Licensed & Insured</h3>
              <p className="text-xs text-muted-foreground">Professional & Secure</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Fast Response</h3>
              <p className="text-xs text-muted-foreground">Same-Day Available</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <ThumbsUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">Honest Pricing</h3>
              <p className="text-xs text-muted-foreground">No Hidden Fees</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-secondary">5-Star Service</h3>
              <p className="text-xs text-muted-foreground">Customer Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto text-primary font-bold">Our Services</Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary">Complete HVAC Solutions</h2>
          <p className="text-muted-foreground text-lg">
            We provide a full range of heating, cooling, and air quality services tailored to Michigan's unique climate.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <Card key={service.title} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-primary bg-white rounded-lg p-1.5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.href} className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-primary py-16">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white flex flex-col gap-4 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Need HVAC Help Today?</h2>
            <p className="text-lg text-white/80">
              Don't wait in the cold or heat. Our expert technicians are ready for emergency repairs 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="orange" className="text-lg font-bold shadow-xl">
              <Link href="tel:2318392579">
                <Phone className="mr-2 h-5 w-5" /> Call Now: (231) 839-2579
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg font-bold">
              <Link href="/contact">Book Service Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto max-w-7xl px-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
              alt="Experienced HVAC Technician"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                  20+
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-lg">Years of Experience</h4>
                  <p className="text-sm text-muted-foreground">Serving Lake City homeowners</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <Badge variant="outline" className="w-fit text-primary font-bold">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary leading-tight">Your Local HVAC Experts You Can Trust</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We understand how important your home comfort is. That's why we treat every job with the same care and professionalism as we would for our own families.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Experienced Technicians",
                "Same-Day Service",
                "Emergency Support",
                "Upfront Pricing",
                "Licensed & Insured",
                "Locally Owned"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-secondary">{feature}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="w-fit mt-4">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary">What Our Customers Say</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground">See why your neighbors trust Spangler Heating & Cooling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <Card key={review.name} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="italic text-secondary/80 mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12">Our Service Areas</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {serviceAreas.map((area) => (
            <div key={area} className="px-6 py-3 rounded-full bg-white border shadow-sm flex items-center gap-2 hover:border-primary hover:text-primary transition-all">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-muted-foreground">And surrounding Missaukee County areas.</p>
      </section>

      {/* FAQ */}
      <section className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our services.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-bold text-secondary text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final Contact CTA */}
      <section className="container mx-auto max-w-7xl px-4 mb-24">
        <div className="bg-secondary rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <Wrench className="w-full h-full text-white" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div className="flex flex-col gap-6 text-white">
              <h2 className="text-4xl md:text-6xl font-bold font-heading">Ready to get started?</h2>
              <p className="text-xl text-white/70">
                Contact Spangler Heating & Cooling today for a free estimate or to schedule your service.
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-bold">(231) 839-2579</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-bold">Same-Day Availability</span>
                </div>
              </div>
            </div>
            <Card className="bg-white border-none shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Request a Quote</h3>
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="p-3 bg-slate-50 border rounded-md text-sm focus:outline-primary" />
                    <input type="text" placeholder="Phone" className="p-3 bg-slate-50 border rounded-md text-sm focus:outline-primary" />
                  </div>
                  <input type="email" placeholder="Email" className="p-3 bg-slate-50 border rounded-md text-sm focus:outline-primary" />
                  <select className="p-3 bg-slate-50 border rounded-md text-sm focus:outline-primary">
                    <option>Select Service</option>
                    <option>Furnace Repair</option>
                    <option>AC Repair</option>
                    <option>Boiler Service</option>
                    <option>Other</option>
                  </select>
                  <textarea placeholder="Message" className="p-3 bg-slate-50 border rounded-md text-sm focus:outline-primary min-h-[100px]"></textarea>
                  <Button type="submit" variant="orange" className="font-bold py-6 text-lg">Send Request</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
