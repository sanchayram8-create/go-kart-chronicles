import { Trophy, Medal, Award, Star, Target, Flame } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "National Championship 2024",
    description: "First place in the National Go Kart Racing Championship",
    year: "2024",
    highlight: true,
  },
  {
    icon: Medal,
    title: "Engineering Excellence Award",
    description: "Recognized for innovative chassis design and aerodynamics",
    year: "2024",
    highlight: false,
  },
  {
    icon: Award,
    title: "Best Design Award",
    description: "Outstanding vehicle design at the Regional Competition",
    year: "2023",
    highlight: false,
  },
  {
    icon: Star,
    title: "Fastest Lap Record",
    description: "Set the track record at Speedway Circuit - 45.2s",
    year: "2023",
    highlight: true,
  },
  {
    icon: Target,
    title: "Endurance Race Champions",
    description: "Winners of the 6-hour endurance race challenge",
    year: "2022",
    highlight: false,
  },
  {
    icon: Flame,
    title: "Innovation Prize",
    description: "For developing an eco-friendly hybrid powertrain",
    year: "2022",
    highlight: false,
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-dark-gradient">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            Our Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            RACING <span className="text-gradient">EXCELLENCE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of victories built on innovation, teamwork, and an unwavering commitment to racing excellence.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                achievement.highlight
                  ? "bg-speed-gradient border-transparent"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {/* Year Badge */}
              <div className={`absolute top-4 right-4 text-sm font-medium ${
                achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {achievement.year}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                achievement.highlight ? "bg-primary-foreground/20" : "bg-primary/20"
              }`}>
                <achievement.icon className={`w-6 h-6 ${
                  achievement.highlight ? "text-primary-foreground" : "text-primary"
                }`} />
              </div>

              {/* Content */}
              <h3 className={`font-display text-xl mb-2 ${
                achievement.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {achievement.title}
              </h3>
              <p className={achievement.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>
                {achievement.description}
              </p>

              {/* Glow Effect on Hover */}
              {!achievement.highlight && (
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-secondary rounded-2xl">
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-primary">25+</span>
            <p className="text-muted-foreground mt-1">Total Wins</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-primary">15</span>
            <p className="text-muted-foreground mt-1">Championships</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-primary">50+</span>
            <p className="text-muted-foreground mt-1">Podium Finishes</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl md:text-5xl text-primary">8</span>
            <p className="text-muted-foreground mt-1">Track Records</p>
          </div>
        </div>
      </div>
    </section>
  );
}
