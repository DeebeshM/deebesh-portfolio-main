import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/deebesh-skm-870928331", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/DeebeshM", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/m.deebesh/", label: "Instagram" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  const footerLinks = [
    { href: "#faq", label: "FAQ" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-darker-surface border-t border-primary/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Icons */}
          <div className="flex space-x-6">
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

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p>© deebesh | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;