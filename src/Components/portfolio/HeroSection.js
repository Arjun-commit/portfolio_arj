import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Data Scientist & AI Researcher";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            ARJUN KUMAR
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12"
          >Data Scientist passionate about developing machine learning systems that enhance user experience and product intelligence. Experienced in <span className="font-semibold text-blue-600 dark:text-cyan-400">deep learning</span>, experimentation, and scalable <span className="font-semibold text-blue-600 dark:text-cyan-400">ML pipeline design</span>, with strong foundations in applied research, privacy focused data science, and cross-functional collaboration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-500 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronDown className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
        </motion.button>
      </div>
    </section>
  );
}