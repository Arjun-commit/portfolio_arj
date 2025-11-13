import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Award, ChartNetwork } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.js";

const experiences = [
  {
    company: "Alchromist LLC",
    role: "Data Scientist Intern",
    icon: ChartNetwork,
    achievements: [
      "An AI-driven personalization startup needed scalable, data-centric workflows to improve model accuracy and product insight generation.",
      "Enhance predictive systems and establish reliable analytics pipelines for model evaluation.",
      "Built and automated ML pipelines integrating multi-source data using Python, SQL, and TensorFlow, ensuring reproducibility and compliance with data-handling standards. Conducted experiment design and A/B testing to evaluate new features under strict data-governance and NDA requirements.",
      "Improved model inference speed by 28 %, boosted predictive accuracy by 20 %, and reduced manual pipeline maintenance by 35 %.",
      "Collaborating with the ML research team to explore large-language and multimodal approaches for personalized recommendations, aligning with privacy-preserving AI standards."
    ],
    color: "red"
  },
  {
    company: "Rainbird Corporation",
    role: "Data Analyst Intern",
    icon: TrendingUp,
    achievements: [
      "Led strategic initiative to modernize operations by integrating 150,000+ order records into custom Quickbase application",
      "Automated analytics through OpenAI's ChatGPT API, achieving 42% reduction in manual reporting time",
      "Improved data quality by 27% and increased forecast accuracy by 14%",
      "Reduced delayed orders by 9% and elevated dashboard engagement by 50%",
      "Created interactive dashboards enabling real-time insights across multiple departments"
    ],
    color: "blue"
  },
  {
    company: "Origins Tribe Pvt. Ltd.",
    role: "Data Scientist Intern",
    icon: Award,
    achievements: [
      "Conducted NLP research and analysis to enhance user sentiment prediction from diverse online sources",
      "Developed and deployed sentiment analysis model using transformer-based architectures",
      "Reduced misclassification and improved prediction accuracy by 18%",
      "Applied hypothesis testing and dataset refinement, resulting in 50% improvement in model insights",
      "Contributed to increased engagement and customer satisfaction through data-driven decisions"
    ],
    color: "purple"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Driving innovation through data science and AI
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center shadow-lg z-10">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="hover:shadow-2xl transition-all duration-300 border-none overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${
                      exp.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                    }`} />
                    
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                          exp.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                        } flex items-center justify-center`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{exp.role}</CardTitle>
                          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${
                              exp.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                            } mt-2 mr-3 flex-shrink-0`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}