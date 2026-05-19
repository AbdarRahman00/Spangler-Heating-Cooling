import { Star, Quote, ThumbsUp, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const allReviews = [
  {
    name: "John D.",
    location: "Lake City, MI",
    date: "January 2026",
    text: "Spangler Heating & Cooling saved us during a mid-winter furnace failure. They were here within an hour and had us back in the heat quickly. Highly recommend!",
    rating: 5,
    verified: true
  },
  {
    name: "Sarah M.",
    location: "Cadillac, MI",
    date: "December 2025",
    text: "Professional, honest, and fair pricing. They installed our new AC unit and did a fantastic job. The technician was very knowledgeable and cleaned up perfectly.",
    rating: 5,
    verified: true
  },
  {
    name: "Mike T.",
    location: "McBain, MI",
    date: "November 2025",
    text: "Great local company. They've been maintaining our boiler for years and we've never had an issue. Reliable and friendly service every time.",
    rating: 5,
    verified: true
  },
  {
    name: "David W.",
    location: "Houghton Lake, MI",
    date: "October 2025",
    text: "Had an emergency leak in my water heater on a Sunday. Spangler was the only place that picked up and sent someone out right away. Lifesavers!",
    rating: 5,
    verified: true
  },
  {
    name: "Linda K.",
    location: "Falmouth, MI",
    date: "September 2025",
    text: "Excellent service from start to finish. They explained everything clearly and the price was exactly what they quoted. No surprises.",
    rating: 5,
    verified: true
  },
  {
    name: "Robert P.",
    location: "Lake City, MI",
    date: "August 2025",
    text: "The best HVAC company in Missaukee County. Honest technicians who don't try to sell you things you don't need.",
    rating: 5,
    verified: true
  }
]

export default function ReviewsPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Reviews Hero */}
      <section className="bg-secondary py-20 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">Customer Reviews</h1>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it. See why homeowners in Lake City and beyond trust Spangler Heating & Cooling.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="container mx-auto max-w-7xl px-4 -mt-24 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <span className="text-5xl font-bold text-secondary mb-2 block">4.9/5</span>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-semibold">Average Rating</p>
          </div>
          <div className="h-16 w-[1px] bg-slate-100 hidden md:block"></div>
          <div className="text-center">
            <span className="text-5xl font-bold text-secondary mb-2 block">500+</span>
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">Happy Customers</p>
          </div>
          <div className="h-16 w-[1px] bg-slate-100 hidden md:block"></div>
          <div className="text-center">
            <span className="text-5xl font-bold text-secondary mb-2 block">100%</span>
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest">Local Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  {review.verified && (
                    <Badge variant="outline" className="text-[10px] text-green-600 border-green-200 bg-green-50 flex items-center gap-1">
                      <CheckCircle2 className="h-2.5 w-2.5" /> Verified Job
                    </Badge>
                  )}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-secondary leading-relaxed mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="border-t pt-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-secondary">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">{review.name}</h4>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {review.location}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="bg-slate-50 rounded-3xl p-12 text-center flex flex-col gap-8 items-center border">
          <h2 className="text-3xl font-bold text-secondary font-heading">Had a Great Experience?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We'd love to hear from you! Your feedback helps us continue providing the best service to our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="orange" size="lg" className="font-bold">
              <Link href="https://g.page/r/YOUR_GOOGLE_ID/review" target="_blank">Leave a Google Review</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-bold">
              <Link href="/contact">Send Feedback Privately</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="bg-primary rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Need the Same 5-Star Service?</h2>
            <p className="text-lg text-white/80">
              Schedule your appointment today and see why our customers love us.
            </p>
          </div>
          <Button asChild variant="orange" size="lg" className="font-bold">
            <Link href="tel:2318392579">Call (231) 839-2579</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function Badge({ children, variant, className }: { children: React.ReactNode, variant?: string, className?: string }) {
  return (
    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${className}`}>
      {children}
    </div>
  )
}
