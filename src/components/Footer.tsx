import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/silasilaw', label: 'GitHub' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn' },
    // { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/arslhmaira', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
           className="flex flex-row items-center gap-1 text-3 font-extrabold hover:scale-150 transition">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span className="text-grey-800">SILA</span>
            <span className="text-blue-400">.</span>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="nooper noreferer"
                className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
