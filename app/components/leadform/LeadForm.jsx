"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LeadForm() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    company: "" 
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
    }
    if (!formData.company.trim()) tempErrors.company = "Nama restoran/perusahaan wajib diisi";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage("Terima kasih! Kami akan segera menghubungi Anda untuk berbagi rahasia dapur.");
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Floating shapes variants
  const floatingShape = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="leadform" 
      className="relative py-24 px-6 bg-white text-gray-900 overflow-hidden"
    >
      {/* Decorative UI Elements */}
      
      {/* Floating circles */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-gray-200 opacity-40"
        variants={floatingShape}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 right-12 w-4 h-4 rounded-full bg-gray-200 opacity-40"
        variants={floatingShape}
        animate="animate"
        custom={1}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-2 h-2 rounded-full bg-gray-200 opacity-40"
        variants={floatingShape}
        animate="animate"
        custom={2}
      />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gray-100"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gray-100"></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-px bg-gray-900"></div>
      <div className="absolute top-8 left-8 h-16 w-px bg-gray-900"></div>
      <div className="absolute bottom-8 right-8 w-16 h-px bg-gray-900"></div>
      <div className="absolute bottom-8 right-8 h-16 w-px bg-gray-900"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Mari Ciptakan Hidangan Istimewa
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Bergabunglah dengan jaringan mitra kuliner premium kami dan dapatkan resep rahasia langsung ke email Anda.
          </motion.p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Form field highlights */}
          <div className="absolute -left-8 top-0 h-full w-px bg-gray-200 hidden md:block"></div>
          <div className="absolute -right-8 top-0 h-full w-px bg-gray-200 hidden md:block"></div>

          <motion.div variants={fadeIn} className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Budi Santoso"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border focus:ring-2 focus:outline-none transition-all ${
                errors.name 
                  ? "border-red-300 focus:ring-red-200" 
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={fadeIn} className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Kerja
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="budi@restoran.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border focus:ring-2 focus:outline-none transition-all ${
                errors.email 
                  ? "border-red-300 focus:ring-red-200" 
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={fadeIn} className="mb-8">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Restoran/Perusahaan
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Nama Restoran"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border focus:ring-2 focus:outline-none transition-all ${
                errors.company 
                  ? "border-red-300 focus:ring-red-200" 
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
            />
            {errors.company && (
              <p className="mt-2 text-sm text-red-600">{errors.company}</p>
            )}
          </motion.div>

          <motion.button
            variants={fadeIn}
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-all flex justify-center items-center gap-2 relative overflow-hidden"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sedang Memproses...
              </>
            ) : (
              <>
                Mulai Sekarang
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white opacity-30"></span>
              </>
            )}
          </motion.button>
        </motion.form>

        {message && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center text-gray-600"
          >
            {message}
          </motion.p>
        )}

        <motion.p 
          variants={fadeIn}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Kami menghargai privasi Anda. Anda dapat berhenti berlangganan kapan saja.
        </motion.p>
      </div>
    </section>
  );
}
