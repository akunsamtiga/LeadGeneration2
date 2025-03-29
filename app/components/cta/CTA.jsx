"use client";
import { motion } from "framer-motion";

export default function CTA() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-28 px-6 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-50 to-white opacity-40"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>
        </div>
        
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-px bg-gray-900"></div>
        <div className="absolute top-8 left-8 h-16 w-px bg-gray-900"></div>
        <div className="absolute bottom-8 right-8 w-16 h-px bg-gray-900"></div>
        <div className="absolute bottom-8 right-8 h-16 w-px bg-gray-900"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <motion.h2 
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Siap Mengubah Dunia Kuliner Anda?
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Atur konsultasi dengan ahli kuliner kami dan temukan bagaimana kami dapat membantu mewujudkan cita rasa impian Anda.
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 20px rgba(29, 78, 216, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Mulai Sekarang
          </motion.a>
          
          <motion.a
            href="/demo"
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Minta Demo
          </motion.a>
        </motion.div>
        
        <motion.p 
          variants={fadeIn}
          className="mt-8 text-sm text-gray-500"
        >
          Dipercaya oleh 500+ bisnis kuliner di seluruh dunia
        </motion.p>
      </motion.div>
    </section>
  );
}
