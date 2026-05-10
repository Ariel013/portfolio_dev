import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaTwitter, url: personalInfo.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center">
                <span className="text-white text-xs font-bold">AK</span>
              </div>
              <h3 className="font-bold bg-gradient-to-r from-primary-light to-accent-light bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t.hero.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              {t.footer.quick_links}
            </h3>
            <ul className="space-y-2">
              {t.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              {t.footer.contact}
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
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
        <div className="text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. {t.footer.made_with}
            <FaHeart className="text-red-500 animate-pulse" />
            {t.footer.and}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
