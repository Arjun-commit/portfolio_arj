import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Lock, Network} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card.js";
import { Badge } from "./ui/badge.js";

const projects = [
  {
    icon: Network,
    title: "NLP Sentiment Analysis and Prediction Model ",
    description: "This project developed a robust NLP sentiment analysis and prediction model using Python, TensorFlow, and DistilRoBERTa to improve multi-label classification F1-score by 15% over baseline models while reducing overfitting across multiple sentiment categories.",
    technologies: ["Python", "TensorFlow", "DistilRoBERTa", "NLP"],
    highlights: [
      "Baseline models suffered from overfitting and low precision.",
      "Designed robust NLP pipeline for balanced, high F1.",
      "Benchmarked DistilRoBERTa, tuned hyperparameters, used custom F1/early stopping.",
      "Improved F1-score 15%, reduced overfitting, achieved stable predictions."
    ],
    gradient: "from-green-500 to-yellow-500"
  },
  {
    icon: Cpu,
    title: "GenAI Chat Agent",
    description: "A sophisticated chatbot built using FastAPI, LangGraph, and LangChain, integrating LLMs like llama3-70b-8192 and mixtral-8x7b-32768 for dynamic model selection.",
    technologies: ["FastAPI", "LangGraph", "LangChain", "LLaMA3", "Mixtral"],
    highlights: [
      "Dynamic model selection using ReAct framework",
      "Integration with TavilySearchResults for enhanced capabilities",
      "Web UI served using Jinja2 templates",
      "RESTful API endpoints for seamless interaction"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Code2,
    title: "Olympics Data Visualization",
    description: "Comprehensive analysis and visualization of Olympic datasets, producing actionable insights that influenced sports strategy and training decisions.",
    technologies: ["R", "Shiny", "ggplot2", "dplyr"],
    highlights: [
      "Collaborative team-based analysis of Olympic patterns",
      "Interactive dashboards using Shiny framework",
      "Statistical analysis and P-testing for trend identification",
      "Data cleaning and preprocessing for accuracy"
    ],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Lock,
    title: "Voice Activated Text Editor (VA-TESE)",
    description: "Innovative text editor with voice command capabilities and document encryption features for secure file management.",
    technologies: ["Python", "TKinter", "speech-recognition", "cryptography"],
    highlights: [
      "Voice-controlled document editing",
      "Secure encryption for private documents",
      "Intuitive user interface built with TKinter",
      "Schedule management and note-taking features"
    ],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions leveraging cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden border-none bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 mr-2 flex-shrink-0`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}