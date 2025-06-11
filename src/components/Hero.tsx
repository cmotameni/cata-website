import { PrimaryButton, SecondaryButton } from './Button';
import heroImage from '../../assets/hero-image.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8 // This ensures the image animates after the buttons (0.1 + 0.2 * 3 + 0.1 buffer)
      }
    }
  };

  return (
    <div
      className="relative min-h-screen hero-section"
      style={{
        background: 'linear-gradient(to bottom, white 0%, #E7F0FD 70%, white 70%, white 100%)'
      }}
    >
      <div className="w-full px-6 pt-32 pb-16">
        {/* Text Content */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants} 
            className="hero-heading text-3xl min-[430px]:text-4xl min-[587px]:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            <span
              className="inline-block bg-gradient-to-r from-[#007AFF] to-[#D305C2] bg-clip-text text-transparent"
              style={{
                animation: 'gradientSpin 4s linear infinite',
                backgroundSize: '200% 200%',
              }}
            >
              10× Faster Insights
            </span>
            {' '}for Manufacturers
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-8">
            We offer a secure, web-based platform that delivers fast actionable insights by combining plant data, process know-how and workflows into turnkey AI-powered tools
          </motion.p>
          {/* Button Row */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <PrimaryButton onClick={() => scrollToSection('contact')}>Book a Demo</PrimaryButton>
            <SecondaryButton onClick={() => scrollToSection('benefits')}>Learn More</SecondaryButton>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="relative w-full max-w-7xl mx-auto"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img 
            src={heroImage} 
            alt="Hero" 
            className="w-full h-auto max-h-[600px] md:max-h-[800px] rounded-lg object-contain" 
          />
        </motion.div>
      </div>

      <style>
        {`
          @keyframes gradientSpin {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero; 