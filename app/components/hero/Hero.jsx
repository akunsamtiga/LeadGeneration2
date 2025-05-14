"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    const targetSection = document.getElementById("leadform");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sophisticated geometric lines data
  const geometricLines = [
    // Diagonal lines
    { 
      type: 'diagonal',
      start: { x: '10%', y: '15%' },
      end: { x: '25%', y: '30%' },
      color: 'bg-orange-200',
      width: 'w-0.5',
      delay: 0.4
    },
    { 
      type: 'diagonal',
      start: { x: '85%', y: '20%' },
      end: { x: '70%', y: '35%' },
      color: 'bg-amber-200',
      width: 'w-0.5',
      delay: 0.6
    },
    
    // Curved lines (simulated with rotated ellipses)
    {
      type: 'curve',
      position: { top: '70%', left: '15%' },
      rotation: 45,
      size: 'w-32 h-8',
      color: 'border-rose-200',
      delay: 0.8
    },
    {
      type: 'curve',
      position: { bottom: '25%', right: '15%' },
      rotation: -30,
      size: 'w-40 h-10',
      color: 'border-emerald-200',
      delay: 1.0
    },
    
    // Zigzag lines (simulated with multiple small lines)
    {
      type: 'zigzag',
      points: [
        { x: '20%', y: '80%' },
        { x: '25%', y: '75%' },
        { x: '30%', y: '80%' },
        { x: '35%', y: '75%' }
      ],
      color: 'bg-gray-200',
      width: 'w-0.5',
      delay: 1.2
    }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-100 blur-3xl opacity-40"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ x: "-50%", y: "-50%" }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>
        </div>
      </div>

      {/* Mouse following highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.08), transparent 80%)`
        }}
      />

      {/* Floating Images */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-28 md:w-40"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            animate={{
              y: [0, -15, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="opacity-80"
          >
            <Image
              src="/images/m1.jpg"
              alt="Burger"
              width={150}
              height={150}
              priority
              className="filter drop-shadow-lg rounded-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-0 w-28 md:w-40"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div 
            animate={{
              y: [0, -20, 0],
              x: [0, -20, 0],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="opacity-80"
          >
            <Image
              src="/images/mie.png"
              alt="Mie"
              width={150}
              height={150}
              priority
              className="filter drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-28 md:w-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <motion.div 
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0],
              rotate: [5, -5, 5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="opacity-80"
          >
            <Image
              src="/images/m2.jpg"
              alt="Cheetos"
              width={150}
              height={150}
              priority
              className="filter drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Geometric Lines */}
      {geometricLines.map((line, i) => {
        if (line.type === 'diagonal') {
          return (
            <motion.div
              key={`diagonal-${i}`}
              className={`absolute ${line.color} ${line.width} h-0.5 origin-left`}
              style={{
                left: line.start.x,
                top: line.start.y,
                width: `calc(${line.end.x} - ${line.start.x})`,
                transform: `rotate(${Math.atan2(
                  parseInt(line.end.y) - parseInt(line.start.y),
                  parseInt(line.end.x) - parseInt(line.start.x)
                ) * (180 / Math.PI)}deg)`,
                height: '1px'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: line.delay,
                duration: 0.8,
                ease: "easeOut"
              }}
            />
          );
        } else if (line.type === 'curve') {
          return (
            <motion.div
              key={`curve-${i}`}
              className={`absolute border ${line.color} border-t-1 border-r-0 border-b-0 border-l-0 ${line.size}`}
              style={{
                top: line.position.top,
                bottom: line.position.bottom,
                left: line.position.left,
                right: line.position.right,
                borderRadius: '50%',
                transform: `rotate(${line.rotation}deg)`,
                borderWidth: '1px'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ 
                delay: line.delay,
                duration: 0.8,
                ease: "easeOut"
              }}
            />
          );
        } else if (line.type === 'zigzag') {
          return (
            <div key={`zigzag-${i}`} className="absolute" style={{ left: line.points[0].x, top: line.points[0].y }}>
              {line.points.slice(1).map((point, j) => (
                <motion.div
                  key={`segment-${j}`}
                  className={`absolute ${line.color} ${line.width} h-0.5 origin-left`}
                  style={{
                    left: 0,
                    top: 0,
                    width: `calc(${point.x} - ${line.points[j].x})`,
                    transform: `rotate(${Math.atan2(
                      parseInt(point.y) - parseInt(line.points[j].y),
                      parseInt(point.x) - parseInt(line.points[j].x)
                    ) * (180 / Math.PI)}deg)`,
                    height: '1px'
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    delay: line.delay + j * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          );
        }
        return null;
      })}

      {/* Rating Badge */}
      <motion.div
        className="absolute bottom-24 right-8 bg-white px-3 py-2 rounded-full shadow-sm flex items-center gap-1 border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-current" />
          ))}
        </div>
        <span className="text-xs font-medium text-gray-700">4.9/5</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 px-6 sm:px-8 md:px-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 text-lg font-medium tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            Rasa Nusantara
          </span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
        >
          Tingkatkan Perjalanan <span className="text-orange-600">Rasa</span> Anda
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
        >
          Temukan kreasi kuliner terbaik yang dirancang untuk mengubah pengalaman bersantap Anda menjadi momen yang tak terlupakan.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            onClick={handleGetStarted}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all"
          >
            Mulai Sekarang
          </motion.button>
          <motion.button
            onClick={() => router.push("/contact")}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all"
          >
            Menu Kami
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

// Star Icon Component
function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
