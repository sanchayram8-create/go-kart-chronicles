import { Wrench, Layers, Printer, Ruler, Hammer, Cog } from "lucide-react";
import fabricationImage from "@/assets/fabrication.jpg";

const processes = [
  {
    icon: Ruler,
    title: "Design & CAD",
    description: "Every component starts as a 3D model, optimized through FEA and CFD analysis.",
  },
  {
    icon: Printer,
    title: "Rapid Prototyping",
    description: "3D printing and CNC machining for quick iteration and validation.",
  },
  {
    icon: Wrench,
    title: "Precision Welding",
    description: "TIG welding chromoly steel frames with aerospace-grade precision.",
  },
  {
    icon: Layers,
    title: "Composite Layup",
    description: "Carbon fiber bodywork crafted with vacuum bagging techniques.",
  },
  {
    icon: Hammer,
    title: "Assembly",
    description: "Meticulous assembly ensuring perfect alignment and tolerance.",
  },
  {
    icon: Cog,
    title: "Testing & QC",
    description: "Rigorous testing protocols before any component sees the track.",
  },
];

export function FabricationSection() {
  return (
    <section id="fabrication" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-4">
            Our Workshop
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            PRECISION <span className="text-gradient">FABRICATION</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From digital design to race-ready machine, every step is executed with engineering excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-speed-gradient rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={fabricationImage} 
              alt="Go Kart Fabrication Workshop" 
              className="relative rounded-xl w-full object-cover aspect-square border border-border"
            />
            
            {/* Floating Stats */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="font-display text-2xl text-primary">500+</span>
                  <p className="text-xs text-muted-foreground">Workshop Hours</p>
                </div>
                <div>
                  <span className="font-display text-2xl text-primary">50+</span>
                  <p className="text-xs text-muted-foreground">Custom Parts</p>
                </div>
                <div>
                  <span className="font-display text-2xl text-primary">99.9%</span>
                  <p className="text-xs text-muted-foreground">Precision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {processes.map((process, index) => (
              <div
                key={index}
                className="group p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <process.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment List */}
        <div className="mt-16 p-8 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground text-center mb-6">Our Equipment</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["TIG Welder", "CNC Mill", "Lathe", "3D Printers", "Laser Cutter", "Engine Dyno", "Alignment Rig", "Paint Booth"].map((item, i) => (
              <span key={i} className="px-4 py-2 bg-secondary text-muted-foreground rounded-lg text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
