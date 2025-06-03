import SectionHeader from './SectionHeader';
import feature1 from '../../assets/feature-1.jpg';
import feature2 from '../../assets/feature-2.jpg';
import feature3 from '../../assets/feature-3.jpg';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Knowledge at your fingertips',
    text: 'Centralize your documentation, data, and even tribal knowledge. Enable easy access and unlock a tailored AI Assistant to provide technical answers',
    image: feature1,
  },
  {
    title: 'Simplified daily operations',
    text: 'Follow step-by-step procedures, adopt new workflows, or capture critical data - all through an intuitive interface designed around your needs.',
    image: feature2,
  },
  {
    title: 'Right Where you need it most',
    text: 'Access via web browser provides flexibility to work on the go. For on-site field applications, we also support with deployment of industrial-grade tablets.',
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
              {/* Image - First on mobile, right on desktop */}
              <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
                <img src={feature.image} alt={feature.title} className="w-full md:min-w-[500px] min-h-[300px] md:min-h-[400px] rounded-lg object-cover object-center" />
              </div>
              {/* Text - Second on mobile, left on desktop */}
              <div className="flex-1 text-center md:text-left order-2 md:order-1">
                <h3 className="text-[36px] font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-[20px] text-gray-600 font-normal">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 