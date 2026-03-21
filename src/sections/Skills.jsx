import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVisualstudiocode,
} from 'react-icons/si';
import { skills } from '../data/portfolioData';

const iconMap = {
  FaReact: FaReact,
  SiNextdotjs: SiNextdotjs,
  SiTypescript: SiTypescript,
  SiTailwindcss: SiTailwindcss,
  FaJs: FaJs,
  FaHtml5: FaHtml5,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  SiMongodb: SiMongodb,
  SiPostgresql: SiPostgresql,
  FaCode: FaJs, // Fallback
  FaGitAlt: FaGitAlt,
  FaDocker: FaDocker,
  SiVisualstudiocode: SiVisualstudiocode,
  FaFigma: FaFigma,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Outils'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
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
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Mes Compétences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-light to-accent-light mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {/* Technologies et outils que je maîtrise pour créer des applications performantes */}
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary-light to-accent-light text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || FaJs;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer card-hover"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2 p-3 bg-gradient-to-br from-primary-light/10 to-accent-light/10 rounded-xl">
                      <IconComponent className="w-8 h-8 text-primary-light" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                      {skill.name}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full">
                      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <span>Niveau</span>
                        {/* <span>{skill.level}%</span> */}
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary-light to-accent-light rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
