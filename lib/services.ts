import { 
  Flame, 
  ThermometerSnowflake, 
  Wrench, 
  Wind, 
  Droplets, 
  Zap, 
  ShieldCheck, 
  Clock,
  Settings,
  Fan,
  Droplet,
  AirVent,
  Search,
  Hammer,
  RotateCcw,
  Stethoscope
} from "lucide-react"

export const servicesData = {
  "furnace-repair": {
    title: "Furnace Repair",
    icon: Flame,
    description: "Expert furnace repair services to keep your Lake City home warm and safe all winter long.",
    longDescription: "When Michigan temperatures drop, a functioning furnace isn't just a comfort—it's a necessity. At Spangler Heating & Cooling, we specialize in fast, reliable furnace repairs for all makes and models.",
    signs: [
      "Strange noises coming from the unit",
      "Yellow pilot light instead of blue",
      "Inconsistent heating across rooms",
      "Frequent cycling on and off",
      "Increasing energy bills"
    ],
    benefits: [
      "Restored home safety and comfort",
      "Improved energy efficiency",
      "Extended equipment lifespan",
      "Prevention of major breakdowns"
    ],
    process: [
      "Comprehensive system diagnosis",
      "Transparent repair estimate",
      "Precision repair by expert techs",
      "Final safety and performance test"
    ]
  },
  "furnace-installation": {
    title: "Furnace Installation",
    icon: Flame,
    description: "Professional furnace installation for maximum efficiency and comfort.",
    longDescription: "A new furnace is a major investment. We ensure it's sized correctly and installed perfectly for years of reliable warmth.",
    signs: ["Furnace is 15+ years old", "Repair costs are rising", "Uneven heating", "System won't stay on"],
    benefits: ["Lower energy bills", "Quiet operation", "Manufacturer warranty", "Consistent comfort"],
    process: ["Sizing assessment", "System removal", "Precision installation", "Calibration & testing"]
  },
  "furnace-maintenance": {
    title: "Furnace Maintenance",
    icon: Settings,
    description: "Annual tune-ups to prevent breakdowns and extend system life.",
    longDescription: "Routine maintenance is the key to furnace longevity and efficiency.",
    signs: ["Annual checkup due", "System running poorly", "High bills"],
    benefits: ["Prevents emergencies", "Optimizes efficiency", "Validates warranty"],
    process: ["Cleaning & inspection", "Part lubrication", "Safety check", "Performance report"]
  },
  "ac-repair": {
    title: "Air Conditioning Repair",
    icon: ThermometerSnowflake,
    description: "Fast AC repairs to keep you cool during the humid Michigan summers.",
    longDescription: "A broken AC can make your home unbearable. Our technicians are experts at diagnosing and fixing cooling issues quickly and efficiently.",
    signs: [
      "AC blowing warm air",
      "Weak airflow from vents",
      "Leaking water or refrigerant",
      "Foul odors when running",
      "Frequent system short-cycling"
    ],
    benefits: [
      "Reliable cooling performance",
      "Lower humidity levels indoors",
      "Reduced cooling costs",
      "Better indoor air quality"
    ],
    process: [
      "Coolant level and leak check",
      "Electrical component inspection",
      "Component repair or replacement",
      "System optimization check"
    ]
  },
  "ac-installation": {
    title: "Air Conditioning Installation",
    icon: Fan,
    description: "High-efficiency AC systems installed by local experts.",
    longDescription: "Upgrade to a modern cooling system for better performance and lower energy costs.",
    signs: ["System is old/noisy", "Inefficient cooling", "Costly repairs"],
    benefits: ["Max efficiency", "Whisper quiet", "Reliable cooling"],
    process: ["Load calculation", "Expert installation", "System testing", "User guide"]
  },
  "ac-maintenance": {
    title: "Air Conditioning Maintenance",
    icon: Settings,
    description: "Spring tune-ups to ensure your AC is ready for the summer heat.",
    longDescription: "Don't wait for the first heatwave to find out your AC isn't working.",
    signs: ["Season change", "Dusty vents", "Noisy startup"],
    benefits: ["Saves money", "Reliable cooling", "Clean air"],
    process: ["Coil cleaning", "Refrigerant check", "Electrical test", "Filter change"]
  },
  "boiler-repair": {
    title: "Boiler Repair",
    icon: Wrench,
    description: "Specialized boiler services for reliable radiant heating.",
    longDescription: "Boilers require specialized knowledge. We have years of experience working with all types of boiler systems in the Lake City area.",
    signs: [
      "Kettling noises (banging/clunking)",
      "Leaking around the boiler",
      "Loss of pressure",
      "Radiators not heating up",
      "Pilot light going out"
    ],
    benefits: [
      "Efficient radiant heat",
      "Quiet system operation",
      "Reduced risk of leaks",
      "Consistent hot water supply"
    ],
    process: [
      "Pressure and leak assessment",
      "Heat exchanger inspection",
      "Safety valve testing",
      "Flue and combustion check"
    ]
  },
  "boiler-installation": {
    title: "Boiler Installation",
    icon: Wrench,
    description: "New energy-efficient boilers for modern home heating.",
    longDescription: "Replace your old boiler with a high-efficiency model that saves space and money.",
    signs: ["Corrosion on tank", "Frequent leaks", "System inefficiency"],
    benefits: ["Radiant warmth", "Energy savings", "Quiet performance"],
    process: ["System removal", "Pipe fitting", "Boiler installation", "Pressure testing"]
  },
  "boiler-maintenance": {
    title: "Boiler Maintenance",
    icon: Settings,
    description: "Ensure your boiler is safe and efficient with annual service.",
    longDescription: "Boilers need regular checks to prevent leaks and ensure safe combustion.",
    signs: ["Pressure drops", "Odd noises", "Annual service due"],
    benefits: ["Home safety", "Reliable heat", "Efficiency"],
    process: ["Leak check", "Combustion test", "Safety valve check", "Internal cleaning"]
  },
  "hvac-installation": {
    title: "HVAC Installation",
    icon: Zap,
    description: "Complete system replacements for total home comfort.",
    longDescription: "We provide full HVAC system design and installation for new homes and renovations.",
    signs: ["Renovation", "Total system failure", "Moving to high efficiency"],
    benefits: ["One system for all", "Seamless comfort", "Smart home ready"],
    process: ["Design phase", "Ductwork prep", "System install", "Final integration"]
  },
  "hvac-repair": {
    title: "HVAC Repair",
    icon: Wrench,
    description: "Comprehensive repairs for integrated heating and cooling systems.",
    longDescription: "Our techs can diagnose issues that span across your entire HVAC system.",
    signs: ["Thermostat issues", "System won't start", "Odd smells"],
    benefits: ["Restored comfort", "Professional diagnosis", "Guaranteed work"],
    process: ["Full system audit", "Component repair", "Electrical check", "Final verification"]
  },
  "air-duct-cleaning": {
    title: "Air Duct Cleaning",
    icon: Wind,
    description: "Breathe cleaner air with our professional duct cleaning services.",
    longDescription: "Over time, dust, allergens, and debris build up in your ducts. Our cleaning service improves air quality and system efficiency.",
    signs: [
      "Visible dust around vents",
      "Unexplained allergies or respiratory issues",
      "Musty smells when the system runs",
      "Reduced airflow",
      "Vents clogged with pet hair"
    ],
    benefits: [
      "Significantly better air quality",
      "Reduced dust throughout home",
      "Increased HVAC efficiency",
      "Removal of unpleasant odors"
    ],
    process: [
      "System inspection",
      "High-powered vacuum extraction",
      "Manual brush cleaning",
      "Sanitization treatment"
    ]
  },
  "ductwork-installation": {
    title: "Ductwork Installation",
    icon: AirVent,
    description: "New ductwork and modifications for better airflow.",
    longDescription: "Proper duct design is critical for HVAC performance and home comfort.",
    signs: ["New addition", "Hot/cold spots", "Leaky ducts"],
    benefits: ["Balanced air", "Silent operation", "No air leaks"],
    process: ["Layout design", "Fabrication", "Installation", "Sealing & testing"]
  },
  "water-heater-services": {
    title: "Water Heater Services",
    icon: Droplets,
    description: "Repair and installation for tank and tankless water heaters.",
    longDescription: "From morning showers to laundry, you need reliable hot water. We service all types of water heaters.",
    signs: [
      "Water not getting hot enough",
      "Rusty or discolored water",
      "Popping or rumbling noises",
      "Water pooling at the base",
      "Running out of hot water quickly"
    ],
    benefits: [
      "Consistent hot water supply",
      "Energy-efficient performance",
      "Longer heater lifespan",
      "Lower utility bills"
    ],
    process: [
      "Anode rod and tank inspection",
      "Heating element testing",
      "Flush and sediment removal",
      "Thermostat calibration"
    ]
  },
  "emergency-hvac-services": {
    title: "Emergency HVAC Services",
    icon: Clock,
    description: "24/7 emergency support when you need it most.",
    longDescription: "HVAC failures don't follow a schedule. That's why we're available around the clock to keep your family safe.",
    signs: [
      "Total system failure in extreme weather",
      "Smell of gas or burning",
      "Loud, alarming noises",
      "Rapidly rising indoor temperatures",
      "Electrical sparking or smoke"
    ],
    benefits: [
      "Immediate peace of mind",
      "Protection from frozen pipes",
      "Safety from hazardous leaks",
      "Fast restoration of comfort"
    ],
    process: [
      "Priority dispatch",
      "Urgent system triage",
      "Immediate critical repairs",
      "Next-day follow-up check"
    ]
  },
  "air-quality-solutions": {
    title: "Indoor Air Quality Solutions",
    icon: Wind,
    description: "Advanced air purification and humidity control.",
    longDescription: "We install whole-home air cleaners, UV lights, and humidifiers to make your home healthier.",
    signs: ["Dry skin/eyes", "Allergy flare-ups", "Excessive dust"],
    benefits: ["Breathe easy", "Reduced sickness", "Protects furniture"],
    process: ["Air testing", "Solution design", "Unit installation", "Performance check"]
  }
}

export type ServiceSlug = keyof typeof servicesData
