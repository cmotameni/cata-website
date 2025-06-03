import SectionHeader from './SectionHeader';
import useData from '../../assets/use-data.jpg';
import useInsight from '../../assets/use-insight.jpg';
import useTeam from '../../assets/use-team.jpg';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Achieve Alignment With Ease',
    text: 'Faster decision-making, from leadership to operations, with centralized performance metrics and dashboards',
    image: useData,
  },
  {
    title: 'Transform Data into Results',
    text: 'Accelerate analysis for engineers by turning complex operational data into purpose-driven information instantly',
    image: useInsight,
  },
  {
    title: 'Empower Operations To Thrive',
    text: 'Equip the team with tools that simplify their tasks, increase their productivity and boost efficiency in your plant',
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
          <SectionHeader pillText="BENEFITS" title="Tailored For Every Team Member" />
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                className="flex flex-col items-center md:items-start w-full md:flex-1"
                variants={itemVariants}
              >
                <img src={benefit.image} alt={benefit.title} className="w-full min-h-[300px] rounded-lg object-cover object-center" />
                <h3 className="text-[24px] font-semibold text-gray-900 mt-6 mb-3 text-center md:text-left">{benefit.title}</h3>
                <p className="text-[18px] text-gray-600 text-center md:text-left pb-6">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 