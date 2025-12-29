import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Team Captain",
    department: "Leadership",
    bio: "Mechanical engineering senior leading the team to championship victories.",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Engineer",
    department: "Engineering",
    bio: "Responsible for overall vehicle design and technical direction.",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Driver",
    department: "Racing",
    bio: "Professional kart racer with 8 years of competitive experience.",
  },
  {
    name: "Emma Rodriguez",
    role: "Powertrain Lead",
    department: "Engineering",
    bio: "Engine specialist focused on maximizing power and reliability.",
  },
  {
    name: "James Park",
    role: "Chassis Engineer",
    department: "Engineering",
    bio: "Designs and optimizes frame geometry for peak handling.",
  },
  {
    name: "Lisa Thompson",
    role: "Electronics Lead",
    department: "Engineering",
    bio: "Develops custom ECU and telemetry systems for data-driven racing.",
  },
  {
    name: "David Kim",
    role: "Aerodynamics",
    department: "Engineering",
    bio: "CFD specialist creating low-drag, high-downforce bodywork.",
  },
  {
    name: "Rachel Green",
    role: "Operations Manager",
    department: "Operations",
    bio: "Manages team logistics, sponsorships, and event coordination.",
  },
];

const departmentColors: Record<string, string> = {
  Leadership: "bg-primary/20 text-primary",
  Engineering: "bg-accent/20 text-accent",
  Racing: "bg-red-500/20 text-red-400",
  Operations: "bg-green-500/20 text-green-400",
};

export function TeamSection() {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Meet The Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            THE PEOPLE BEHIND <span className="text-gradient">THE SPEED</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse team of engineers, designers, and racers united by a passion for motorsport excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center border-2 border-primary/30 group-hover:border-primary transition-colors">
                <span className="font-display text-2xl text-primary">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full mb-3 ${departmentColors[member.department]}`}>
                  {member.department}
                </span>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                  <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
                <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center p-8 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            Want to Join Our Team?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We are always looking for talented individuals passionate about engineering and motorsport.
          </p>
          <a 
            href="mailto:recruitment@velocitykart.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-speed-gradient text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5" />
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
