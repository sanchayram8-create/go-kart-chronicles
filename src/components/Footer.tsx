import { Flag, Instagram, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Achievements", href: "#achievements" },
  { name: "Subsystems", href: "#subsystems" },
  { name: "History", href: "#history" },
  { name: "Team", href: "#team" },
  { name: "Fabrication", href: "#fabrication" },
  { name: "Vehicles", href: "#vehicles" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-speed-gradient rounded-lg flex items-center justify-center">
                <Flag className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl tracking-wide text-foreground">
                VELOCITY<span className="text-primary">KART</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Engineering excellence meets racing passion. We design, build, and race 
              high-performance go karts that push the boundaries of speed and innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-secondary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Engineering Building, Room 204<br />
                  University Campus, City 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@velocitykart.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@velocitykart.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 VelocityKart Racing Team. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
