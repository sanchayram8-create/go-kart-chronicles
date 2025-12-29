import { Button } from "@/components/ui/button";
import { ChevronDown, Trophy, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-racing.jpg";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Go Kart Racing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Speed Lines Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-speed-gradient animate-speed-line"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6 animate-fade-up">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">National Champions 2024</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            BORN TO <span className="text-gradient">RACE</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Engineering excellence meets racing passion. We design, build, and race 
            high-performance go karts that push the boundaries of speed and innovation.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("#vehicles")}>
              Explore Our Karts
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("#history")}>
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="group">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-display text-3xl md:text-4xl text-foreground">25+</span>
              </div>
              <span className="text-sm text-muted-foreground">Race Victories</span>
            </div>
            <div className="group">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-display text-3xl md:text-4xl text-foreground">180</span>
              </div>
              <span className="text-sm text-muted-foreground">Top Speed (km/h)</span>
            </div>
            <div className="group">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span className="font-display text-3xl md:text-4xl text-foreground">30+</span>
              </div>
              <span className="text-sm text-muted-foreground">Team Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("#achievements")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
}
