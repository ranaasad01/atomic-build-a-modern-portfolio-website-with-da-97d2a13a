"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, Code2, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/alexdev", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/alexdev", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexdev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex@alexdev.io", label: "Email" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/projects", label: "All Projects" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Alex<span className="text-indigo-400">Dev</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer crafting beautiful, performant web experiences with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Available for freelance &amp; full-time roles
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> by Alex Chen &mdash; {new Date().getFullYear()}
          </p>
          <p className="text-slate-600 text-xs">
            Next.js 14 &bull; TypeScript &bull; Tailwind CSS &bull; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
