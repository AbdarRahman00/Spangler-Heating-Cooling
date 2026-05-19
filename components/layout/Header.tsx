"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, ChevronDown, Clock, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Furnace Repair", href: "/services/furnace-repair" },
      { name: "AC Repair", href: "/services/ac-repair" },
      { name: "Boiler Service", href: "/services/boiler-repair" },
      { name: "Duct Cleaning", href: "/services/air-duct-cleaning" },
      { name: "Water Heaters", href: "/services/water-heater-services" },
      { name: "Emergency HVAC", href: "/services/emergency-hvac-services" },
    ],
  },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden bg-secondary text-secondary-foreground py-2 md:block">
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-accent" /> 24/7 Emergency Service
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-3 w-3 text-accent" /> Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-3 w-3 text-accent" /> 5-Star Rated HVAC Experts
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="tel:2318392579" className="hover:text-accent transition-colors">
              (231) 839-2579
            </Link>
            <span>6410 W Sanborn Rd, Lake City, MI</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "w-full bg-white transition-all duration-300 border-b",
          isScrolled ? "py-2 shadow-md" : "py-4"
        )}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/logo.png"
                alt="Spangler Heating & Cooling"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-secondary tracking-tight">
                SPANGLER
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-primary uppercase tracking-widest">
                Heating & Cooling
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="h-3 w-3" />}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-secondary hover:bg-slate-50 hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="emergency" className="hidden sm:flex">
              Emergency Available
            </Badge>
            <Button asChild variant="orange" className="hidden md:flex font-bold">
              <Link href="tel:2318392579">
                <Phone className="mr-2 h-4 w-4" /> (231) 839-2579
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="flex flex-col gap-2">
                      <Link
                        href={link.href}
                        className="text-lg font-semibold text-secondary hover:text-primary"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="ml-4 flex flex-col gap-2 border-l pl-4">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button asChild variant="orange" className="mt-4 font-bold">
                    <Link href="tel:2318392579">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
