import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Globe, Star, CheckCircle2 } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Furnace Repair", href: "/services/furnace-repair" },
    { name: "AC Repair", href: "/services/ac-repair" },
    { name: "Boiler Service", href: "/services/boiler-repair" },
    { name: "Duct Cleaning", href: "/services/air-duct-cleaning" },
    { name: "Emergency HVAC", href: "/services/emergency-hvac-services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Customer Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 bg-white rounded-md p-1">
                <Image
                  src="/logo.png"
                  alt="Spangler Heating & Cooling"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-white">SPANGLER</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Heating & Cooling
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Serving Lake City and surrounding Michigan areas with professional, reliable HVAC solutions. Locally owned and operated since [Year].
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/groups/829583754611568/posts/1250121139224492/"
                target="_blank"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-3 w-3 text-accent" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0" />
                <span className="text-slate-400 text-sm">
                  6410 W Sanborn Rd,<br />Lake City, MI 49651
                </span>
              </li>
              <li>
                <Link
                  href="tel:2318392579"
                  className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-accent shrink-0" /> (231) 839-2579
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Mail className="h-5 w-5 text-accent shrink-0" /> info@spanglerhvac.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Embed & Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden h-48 border border-slate-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.436152745348!2d-85.1979339!3d44.3857329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2b2b1b3b3b3b3b%3A0x9b9b9b9b9b9b9b9b!2s6410%20W%20Sanborn%20Rd%2C%20Lake%20City%2C%20MI%2049651!5e0!3m2!1sen!2sus!4v1715850000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-slate-500 text-center lg:text-right">
                © {new Date().getFullYear()} Spangler Heating & Cooling. All rights reserved. Locally owned & operated in Michigan.
              </p>
              <div className="flex gap-6 justify-center lg:justify-end text-xs text-slate-500">
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
