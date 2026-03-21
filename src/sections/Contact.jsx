import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import codingameLogo from '/codingame.png';
import emailjs from '@emailjs/browser';
import { personalInfo, emailJsConfig } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Veuillez remplir tous les champs.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Envoyer l'email avec EmailJS
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        emailJsConfig.publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour ${personalInfo.name}, je vous contacte depuis votre portfolio.`
  );

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contactez-moi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à me contacter !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Informations de Contact
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                      <FaEnvelope className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors duration-200"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                      <FaMapMarkerAlt className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Localisation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <motion.a
                    href={`https://wa.me/${personalInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaWhatsapp className="w-8 h-8" />
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-sm opacity-90">Discutons directement !</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Suivez-moi */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Suivez-moi
                </h3>
                <div className="flex items-center gap-4">
                  {[
                    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
                    { icon: FaTwitter, href: personalInfo.social.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
                    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
                    { icon: FaDiscord, href: personalInfo.social.discord, label: 'Discord', color: 'hover:text-indigo-500' },
                    { icon: null, href: personalInfo.social.codingame, label: 'CodinGame', color: '' },
                  ].map(({ icon: Icon, href, label, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={label}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-500 dark:text-gray-400 ${color} transition-colors duration-200`}
                    >
                      {Icon
                        ? <Icon className="w-6 h-6" />
                        : <img src={codingameLogo} alt="CodinGame" className="w-6 h-6 object-contain rounded" />
                      }
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Nom complet + Email sur la même ligne */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                    placeholder="Objet de votre message"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white resize-none"
                    placeholder="Votre message..."
                    required
                  ></textarea>
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loader w-5 h-5 border-2 border-white border-t-transparent"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
