import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Globe, Send, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Contact Hero */}
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to schedule service or have a question? We're here to help you 24/7. Reach out today for expert HVAC support.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-secondary">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether it's an emergency repair or a routine maintenance check, Spangler Heating & Cooling is your trusted local partner in Lake City, MI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Call Us</h4>
                  <Link href="tel:2318392579" className="text-primary hover:underline font-medium">(231) 839-2579</Link>
                  <p className="text-xs text-muted-foreground mt-1">24/7 Emergency Dispatch</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Our Office</h4>
                  <p className="text-muted-foreground text-sm">6410 W Sanborn Rd,<br />Lake City, MI 49651</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Email Us</h4>
                  <p className="text-muted-foreground text-sm">info@spanglerhvac.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">Hours</h4>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 8am - 5pm</p>
                  <p className="text-xs font-bold text-accent">24/7 Emergency Support</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl flex flex-col gap-6">
              <h4 className="font-bold text-secondary">Follow Us</h4>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/groups/829583754611568/posts/1250121139224492/"
                  target="_blank"
                  className="h-12 w-12 rounded-full bg-white border shadow-sm flex items-center justify-center text-[#1877F2] hover:bg-primary hover:text-white transition-all"
                >
                <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-none">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-secondary mb-8">Schedule a Free Estimate</h3>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-secondary">Name</label>
                    <input type="text" placeholder="John Doe" className="p-3 bg-slate-50 border rounded-md text-sm" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-secondary">Phone Number</label>
                    <input type="text" placeholder="(231) 000-0000" className="p-3 bg-slate-50 border rounded-md text-sm" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-secondary">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="p-3 bg-slate-50 border rounded-md text-sm" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-secondary">Service Needed</label>
                  <select className="p-3 bg-slate-50 border rounded-md text-sm">
                    <option>Select a Service</option>
                    <option>Furnace Repair</option>
                    <option>AC Repair</option>
                    <option>Boiler Service</option>
                    <option>Duct Cleaning</option>
                    <option>Water Heater Service</option>
                    <option>Emergency Service</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-secondary">Message</label>
                  <textarea placeholder="Tell us how we can help..." className="p-3 bg-slate-50 border rounded-md text-sm min-h-[120px]"></textarea>
                </div>
                <Button variant="orange" size="lg" className="font-bold py-6 text-lg">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted via phone or email regarding your request.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="rounded-3xl overflow-hidden h-[450px] shadow-xl border relative">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.436152745348!2d-85.1979339!3d44.3857329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2b2b1b3b3b3b3b%3A0x9b9b9b9b9b9b9b9b!2s6410%20W%20Sanborn%20Rd%2C%20Lake%20City%2C%20MI%2049651!5e0!3m2!1sen!2sus!4v1715850000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
          ></iframe>
        </div>
      </section>
    </div>
  )
}
