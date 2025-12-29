import { Gauge, Weight, Zap, Timer, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import vehicleImage from "@/assets/vehicle-kart.jpg";

const vehicles = [
  {
    name: "VK-05",
    subtitle: "Current Competition Kart",
    year: "2024",
    image: vehicleImage,
    status: "Active",
    specs: {
      topSpeed: "180 km/h",
      weight: "78 kg",
      power: "34 HP",
      acceleration: "0-100: 3.2s",
    },
    features: ["Carbon Fiber Body", "Custom ECU", "Adjustable Aero", "Racing Slicks"],
  },
  {
    name: "VK-04",
    subtitle: "Championship Winner",
    year: "2023",
    image: vehicleImage,
    status: "Reserve",
    specs: {
      topSpeed: "175 km/h",
      weight: "82 kg",
      power: "32 HP",
      acceleration: "0-100: 3.5s",
    },
    features: ["Steel Chassis", "Modified Engine", "Standard Aero", "All-Weather Tires"],
  },
  {
    name: "VK-03",
    subtitle: "Regional Champion",
    year: "2022",
    image: vehicleImage,
    status: "Display",
    specs: {
      topSpeed: "170 km/h",
      weight: "85 kg",
      power: "30 HP",
      acceleration: "0-100: 3.8s",
    },
    features: ["First Gen Design", "Stock Engine", "Basic Aero", "Budget Build"],
  },
];

export function VehiclesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVehicle = vehicles[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % vehicles.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + vehicles.length) % vehicles.length);

  return (
    <section id="vehicles" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-texture opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Our Machines
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            THE <span className="text-gradient">VEHICLES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A lineage of racing machines, each one faster and more refined than the last.
          </p>
        </div>

        {/* Vehicle Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-speed-gradient rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={activeVehicle.image} 
              alt={activeVehicle.name} 
              className="relative rounded-xl w-full object-cover aspect-square border border-border"
            />
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
              <span className={`text-sm font-medium ${
                activeVehicle.status === "Active" ? "text-green-400" : 
                activeVehicle.status === "Reserve" ? "text-accent" : "text-muted-foreground"
              }`}>
                {activeVehicle.status}
              </span>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button 
                onClick={prev}
                className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button 
                onClick={next}
                className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-display text-5xl md:text-6xl text-foreground">{activeVehicle.name}</span>
              <span className="px-3 py-1 bg-secondary text-muted-foreground rounded-lg">{activeVehicle.year}</span>
            </div>
            <p className="text-xl text-primary mb-6">{activeVehicle.subtitle}</p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Gauge className="w-4 h-4" />
                  <span className="text-sm">Top Speed</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.topSpeed}</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Weight className="w-4 h-4" />
                  <span className="text-sm">Weight</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.weight}</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm">Power</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.power}</span>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <Timer className="w-4 h-4" />
                  <span className="text-sm">Acceleration</span>
                </div>
                <span className="font-display text-2xl text-foreground">{activeVehicle.specs.acceleration}</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-3">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {activeVehicle.features.map((feature, i) => (
                  <span key={i} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/30">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Selector */}
        <div className="flex justify-center gap-4 mt-12">
          {vehicles.map((vehicle, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-xl font-display text-lg transition-all ${
                index === activeIndex 
                  ? "bg-speed-gradient text-primary-foreground" 
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {vehicle.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
