import { Flag, Rocket, Trophy, Star, Zap } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Founded by a group of engineering students with a shared passion for motorsport and innovation.",
    icon: Flag,
  },
  {
    year: "2019",
    title: "First Competition",
    description: "Entered our first regional competition with VK-01, finishing in the top 10 against experienced teams.",
    icon: Rocket,
  },
  {
    year: "2020",
    title: "Technical Breakthrough",
    description: "Developed our proprietary chassis design that became the foundation for all future vehicles.",
    icon: Zap,
  },
  {
    year: "2022",
    title: "First Major Victory",
    description: "Won the Regional Championship with VK-03, our most advanced kart at the time.",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "National Champions",
    description: "Claimed the National Championship title, cementing our position as a leading karting team.",
    icon: Star,
  },
];

export function HistorySection() {
  return (
    <section id="history" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            FROM GARAGE TO <span className="text-gradient">GLORY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The story of how a group of passionate engineers built a championship-winning racing team.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-8 mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <span className="inline-block font-display text-4xl text-primary mb-2">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-14 h-14 bg-background border-2 border-primary rounded-full flex items-center justify-center glow-primary">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Empty Space for Alignment */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center p-8 bg-speed-gradient rounded-2xl">
          <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-4">
            OUR VISION FOR THE FUTURE
          </h3>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto">
            We aim to become the leading student karting team in the country, inspiring the next 
            generation of motorsport engineers while pushing the boundaries of racing technology.
          </p>
        </div>
      </div>
    </section>
  );
}
