import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Projets', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. Fait avec
            <FaHeart className="text-red-500 animate-pulse" />
            et React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
