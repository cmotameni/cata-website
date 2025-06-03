import React from 'react';
import SectionHeader from './SectionHeader';
import feature1 from '../../assets/feature-1.jpg';
import feature2 from '../../assets/feature-2.jpg';
import feature3 from '../../assets/feature-3.jpg';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'All your knowledge at your fingertips',
    text: 'Centralize documentation, data, and even tribal knowledge about your processes. Then ask questions to your own personal AI Assistant.',
    image: feature1,
  },
  {
    title: 'Simplified daily operations',
    text: 'Follow step-by-step procedures, learn a new workflow, collect critical data. Whatever your challenge is, dive into it with confidence using our easy to use interface, built to fit your needs.',
    image: feature2,
  },
  {
    title: 'Take it where you need it most',
    text: 'Our solutions are secure and accessible via web browser, offering flexibility to take it on the go. We also offer deployment of industrial tablets with our software.',
    image: feature3,
  },
];

const FeaturesSection = () => {
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
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
          variants={itemVariants}
        >
          <SectionHeader pillText="FEATURES" title="Accelerate Your Revenue Through AI-Derived Cost-Savings" />
        </motion.div>
        <div className="flex flex-col gap-12 mt-20">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col md:flex-row items-center md:items-center gap-16 md:gap-[64px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "200px" }}
              variants={itemVariants}
            >
              {/* Text on the left */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-[36px] font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-[20px] text-gray-600 font-normal">{feature.text}</p>
              </div>
              {/* Image on the right */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img src={feature.image} alt={feature.title} className="min-w-[500px] min-h-[400px] rounded-lg object-cover object-center" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 