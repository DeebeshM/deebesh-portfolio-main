import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const avatarImage = "/lovable-uploads/4cd3f2e6-07ed-4874-af9e-1d3c26a400e5.png";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/deebesh-skm-870928331", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/DeebeshM", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/m.deebesh/", label: "Instagram" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-background"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-foreground">Hi, it's </span>
                <span className="text-neon hero-text-glow">DEEBESH M</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground">
                I'm a <span className="text-primary font-semibold">Web Designer</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am a Full-Stack Python Engineer pursuing a BE in Computer Science and 
              Engineering, with a passion for creating efficient software solutions. 
              Proficient in Python,Hibernate, and front-end technologies 
              like HTML, CSS, and JavaScript.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-neon">
                chat
              </Button>
              <Button className="btn-neon">
                contact
              </Button>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Background Circle */}
              <div className="absolute inset-0 w-80 h-80 bg-primary/20 rounded-full blur-2xl animate-glow"></div>
              
              {/* Avatar Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 p-4 neon-border animate-float">
                <img
                  src={avatarImage}
                  alt="Deebesh M - 3D Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;