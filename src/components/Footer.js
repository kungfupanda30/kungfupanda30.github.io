import React from 'react';
import { Facebook, Instagram, Twitter, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: Github,
      url: 'https://github.com/sangy987',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      url: 'https://www.instagram.com/thecurrlygal',
      label: 'Instagram'
    },
    {
      icon: Twitter,
      url: 'https://twitter.com/thecurrlygal',
      label: 'Twitter'
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/sanghamitra.biswas.921',
      label: 'Facebook'
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Career', href: '#career' },
    { label: 'Writing', href: '#writing' },
    { label: 'Podcasts', href: '#podcasts' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Sanghamitra Biswas</h3>
              <p>Software Engineer</p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-socials">
              <h4>Connect</h4>
              <div className="social-links">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="social-link"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              Made with <span className="heart">❤️</span> by Sanghamitra <br />
              © {currentYear} THECURRLYGAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
