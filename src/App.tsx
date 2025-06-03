import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBySection from './components/TrustedBySection'
import UseCasesSection from './components/UseCasesSection'
import FeaturesSection from './components/FeaturesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.7,
      delay: 0.1
    }
  }
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}><Hero /></motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}><TrustedBySection /></motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}><UseCasesSection /></motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}><FeaturesSection /></motion.div>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}><ContactSection /></motion.div>
      <Footer />
    </div>
  )
}

export default App
