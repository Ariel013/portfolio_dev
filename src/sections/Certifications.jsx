import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';
import { SiPostman, SiFortinet } from 'react-icons/si';
import { certifications } from '../data/portfolioData';

const issuerIconMap = {
  'SecOps Group': { icon: FaShieldAlt, color: 'text-red-500' },
  'Postman': { icon: SiPostman, color: 'text-orange-500' },
  'Fortinet': { icon: SiFortinet, color: 'text-red-600' },
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Mes certifications professionnelles et formations continues
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    {(() => {
                      const mapping = issuerIconMap[cert.issuer];
                      const IconComponent = mapping ? mapping.icon : FaShieldAlt;
                      const colorClass = mapping ? mapping.color : 'text-primary-light';
                      return (
                        <div className="inline-flex p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className={`w-8 h-8 ${colorClass}`} />
                        </div>
                      );
                    })()}
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <p className="text-sm font-semibold text-primary-light mb-4">
                    {cert.date}
                  </p>

                  {/* Link */}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-accent-light transition-colors duration-200"
                    >
                      Voir la certification
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
