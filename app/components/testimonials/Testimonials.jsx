"use client";
import { motion } from "framer-motion";

const testimonials = [
  { 
    id: 1, 
    name: "Kim Ji-min",  
    text: "Platform ini membantu saya meningkatkan inovasi menu dan kualitas pelayanan, menciptakan pengalaman kuliner yang luar biasa!", 
    job: "Konsultan Kuliner", 
    photo: "/images/pp6.jpg", 
    rating: 5,
    company: "Naver Corp"
  },
  { 
    id: 2, 
    name: "Lee Seung-hee",  
    text: "Kami melihat peningkatan signifikan dalam kepuasan pelanggan sejak menggunakan layanan ini—sangat direkomendasikan untuk bisnis kuliner!", 
    job: "Manajer E-commerce", 
    photo: "/images/pp2.jpg", 
    rating: 4,
    company: "Coupang"
  },
  { 
    id: 3, 
    name: "Park Hye-jin",  
    text: "Layanan ini menyederhanakan proses operasional restoran kami, memungkinkan kami fokus pada inovasi kuliner sambil mengotomatisasi tugas-tugas rutin.", 
    job: "Manajer Operasional", 
    photo: "/images/pp3.jpg", 
    rating: 5,
    company: "Samsung Electronics"
  },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-50 blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gray-100 blur-3xl opacity-30"></div>
        
        {/* Grid lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gray-100"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gray-100"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Dipercaya oleh Pemimpin Industri Kuliner
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Dengarkan apa kata para profesional dari perusahaan kuliner terkemuka tentang layanan kami
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.job}</p>
                  <p className="text-xs text-orange-600 font-medium mt-1">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic relative pl-6">
                <svg 
                  className="absolute left-0 top-0 w-5 h-5 text-gray-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <svg 
                  className="w-6 h-6 text-gray-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all">
            Lihat Lebih Banyak Testimoni
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
