import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, BarChart, Brain, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";
import { Badge } from './ui/badge';

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "R", "SQL", "C/C++"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Brain,
    title: "Data Science & ML",
    skills: [
      "Transformer Architectures",
      "Deep Learning",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "SVM",
      "Random Forest",
      "Feature Engineering",
      "Predictive Modeling"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["IBM Cloud", "AWS", "Kubernetes", "Docker", "Spark"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      "Web Scraping",
      "Data Wrangling",
      "ELT Process",
      "A/B Testing",
      "Experimental Design"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    icon: BarChart,
    title: "Visualization & BI",
    skills: [
      "Power BI",
      "Tableau",
      "Microsoft Excel",
      "R Markdown",
      "Quarto",
      "Django"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: [
      "Effective Communication",
      "Collaborative",
      "Problem Solving",
      "Critical Thinking",
      "Adaptability"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive skill set spanning multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:shadow-md transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Research Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border-none bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Brain className="w-8 h-8" />
                Research & Development Excellence
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-2">Research Skills</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Hypothesis Testing</li>
                    <li>• Statistical Analysis</li>
                    <li>• Data Exploration</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Modeling</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Predictive Modeling</li>
                    <li>• Model Optimization</li>
                    <li>• Performance Analysis</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Communication</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Research Writing</li>
                    <li>• Conference Publications</li>
                    <li>• Technical Documentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}