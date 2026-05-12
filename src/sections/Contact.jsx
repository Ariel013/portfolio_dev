import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaPhone } from 'react-icons/fa';
const codingameLogo = 'https://res.cloudinary.com/dywgshhwp/image/upload/v1778554012/codingame_rnjttu.png';
import emailjs from '@emailjs/browser';
import { personalInfo, emailJsConfig } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: t.contact.form.error_fields });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        { name: formData.name, email: formData.email, title: formData.subject, message: formData.message },
        emailJsConfig.publicKey
      );
      setStatus({ type: 'success', message: t.contact.form.success });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setStatus({ type: 'error', message: t.contact.form.error_send });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMsg = encodeURIComponent(
    t.contact.whatsapp_msg.replace('{{name}}', personalInfo.name)
  );

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              {t.contact.tag}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <motion.div variants={item} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.contact.info_title}
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                      <FaEnvelope className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.email_label}</h4>
                      <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors duration-200">
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
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.location_label}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                      <FaPhone className="w-6 h-6 text-primary-light" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.contact.phone_label}</h4>
                      <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-light transition-colors duration-200">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <motion.a
                    href={`https://wa.me/${personalInfo.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaWhatsapp className="w-8 h-8" />
                    <div>
                      <h4 className="font-semibold mb-1">{t.contact.whatsapp_label}</h4>
                      <p className="text-sm opacity-90">{t.contact.whatsapp_sub}</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {t.contact.follow_title}
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

            {/* Right: form */}
            <motion.div variants={item}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                      placeholder={t.contact.form.name_placeholder} required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                      placeholder={t.contact.form.email_placeholder} required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white"
                    placeholder={t.contact.form.subject_placeholder} required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-all duration-200 text-gray-900 dark:text-white resize-none"
                    placeholder={t.contact.form.message_placeholder} required
                  />
                </div>

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

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-light to-accent-light text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loader w-5 h-5 border-2" />
                      {t.contact.form.submitting}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {t.contact.form.submit}
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
