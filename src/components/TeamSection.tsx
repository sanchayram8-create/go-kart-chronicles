import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mohanraj",
    role: "Team Captain & Steering Lead",
    department: "Leadership",
    bio: "Leading the team with vision and precision, also heading the steering system design.",
  },
  {
    name: "Sujithra",
    role: "Vice Captain",
    department: "Leadership",
    bio: "Supporting team leadership and ensuring smooth coordination across all departments.",
  },
  {
    name: "Theep Vivin",
    role: "Team Manager",
    department: "Operations",
    bio: "Managing team logistics, resources, and overall project coordination.",
  },
  {
    name: "Rithik",
    role: "Chassis Lead",
    department: "Engineering",
    bio: "Designing and optimizing frame geometry for maximum performance and handling.",
  },
  {
    name: "Dharun",
    role: "Brakes Lead",
    department: "Engineering",
    bio: "Engineering reliable braking systems for optimal stopping power and safety.",
  },
  {
    name: "Nirmal",
    role: "Powertrain Lead",
    department: "Engineering",
    bio: "Maximizing engine performance and power delivery for competitive edge.",
  },
  {
    name: "Hajira",
    role: "Drivetrain Lead",
    department: "Engineering",
    bio: "Developing efficient power transmission systems from engine to wheels.",
  },
  {
    name: "Balachander",
    role: "Design & CAE Lead",
    department: "Engineering",
    bio: "Leading computer-aided engineering and design optimization for vehicle performance.",
  },
  {
    name: "Theneeshwari",
    role: "Sales Lead",
    department: "Operations",
    bio: "Driving sponsorship acquisition and building strategic business partnerships.",
  },
  {
    name: "Yudheesh",
    role: "Cost Lead",
    department: "Operations",
    bio: "Managing budget allocation and ensuring cost-effective project execution.",
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
