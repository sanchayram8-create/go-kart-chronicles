import { Cog, Gauge, Cpu, Battery, Wind, Shield } from "lucide-react";

const subsystems = [
  {
    icon: Cog,
    name: "Powertrain",
    specs: "125cc / 34 HP",
    description: "High-performance engine with optimized fuel injection and exhaust system for maximum power output.",
    features: ["Tuned Exhaust", "Racing Carburetor", "Performance Air Filter"],
  },
  {
    icon: Shield,
    name: "Chassis",
    specs: "CrMo Steel",
    description: "Lightweight chromoly steel frame engineered for optimal rigidity and driver safety.",
    features: ["Custom Geometry", "Roll Protection", "Weight Optimized"],
  },
  {
    icon: Wind,
    name: "Aerodynamics",
    specs: "0.85 Cd",
    description: "CFD-optimized bodywork reducing drag while improving downforce at high speeds.",
    features: ["Front Splitter", "Rear Diffuser", "Side Pods"],
  },
  {
    icon: Gauge,
    name: "Braking System",
    specs: "Dual Circuit",
    description: "Racing-grade hydraulic brakes with ventilated discs for consistent stopping power.",
    features: ["Floating Rotors", "Racing Pads", "Adjustable Bias"],
  },
  {
    icon: Cpu,
    name: "Electronics",
    specs: "Custom ECU",
    description: "In-house developed engine management system with real-time telemetry.",
    features: ["Data Logging", "Launch Control", "Traction Management"],
  },
  {
    icon: Battery,
    name: "Electrical",
    specs: "12V System",
    description: "Lightweight lithium battery with integrated safety circuits and quick-start capability.",
    features: ["Kill Switch", "LED Display", "Battery Management"],
  },
];

export function SubsystemsSection() {
  return (
    <section id="subsystems" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-texture opacity-30" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
            Technical Excellence
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            ENGINEERED <span className="text-gradient">SUBSYSTEMS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every component is designed, tested, and refined for peak performance on the track.
          </p>
        </div>

        {/* Subsystems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsystems.map((system, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <system.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-mono rounded-lg">
                  {system.specs}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-2">{system.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{system.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {system.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-speed-gradient rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
