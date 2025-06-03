import React from 'react';
import SectionHeader from './SectionHeader';
import useData from '../../assets/use-data.jpg';
import useInsight from '../../assets/use-insight.jpg';
import useTeam from '../../assets/use-team.jpg';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Informed Plant Management',
    text: 'Have your knowledge available in one place by uploading operational data and relevant process documents.',
    image: useData,
  },
  {
    title: 'Fast Insights For Engineers',
    text: 'Generate dashboard that is equipped with an AI Assistant and accelerate production of actionable insights.',
    image: useInsight,
  },
  {
    title: 'Share With Your Team',
    text: 'Give the tools to the team to help them drive plant decisions and increase operational efficiency.',
    image: useTeam,
  },
];

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="benefits" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={containerVariants}
        >
          <SectionHeader pillText="BENEFITS" title="How Manufacturers Benefit from Cata" />
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-start w-full md:flex-1"
                variants={itemVariants}
              >
                <img src={benefit.image} alt={benefit.title} className="w-full min-h-[300px] rounded-lg object-cover object-center" />
                <h3 className="text-[24px] font-semibold text-gray-900 mt-6 mb-3 text-left">{benefit.title}</h3>
                <p className="text-[18px] text-gray-600 text-left pb-6">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 