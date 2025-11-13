import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card.js";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "arjhari95@gmail.com",
    link: "mailto:arjhari95@gmail.com",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Arjun-commit",
    link: "https://github.com/Arjun-commit",
    color: "from-gray-700 to-gray-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "arjun-kumar-cse",
    link: "https://www.linkedin.com/in/arjun-kumar-cse/",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tucson, Arizona",
    color: "from-green-500 to-teal-500"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {method.link ? (
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-none">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        {method.label}
                      </p>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {method.value}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              ) : (
                <Card className="h-full border-none">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      {method.label}
                    </p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {method.value}
                    </p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-block border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
              <p className="text-lg mb-6 opacity-90">
                Currently seeking full-time positions in Data Science, Machine Learning, and AI Research
              </p>
              <a
                href="mailto:arjunkumar@arizona.edu"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-gray-600 dark:text-gray-400"
        >
          <p className="mb-2">© 2025 Arjun Kumar. All rights reserved.</p>
          <p className="text-sm">
            Built with passion for data science
          </p>
        </motion.div>
      </div>
    </section>
  );
}