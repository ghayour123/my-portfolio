import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      question: "What technologies do you use for full stack development?",
      answer: "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with modern technologies like Next.js, TypeScript, NestJS, and Supabase. I also work with various databases, cloud services, and deployment platforms."
    },
    {
      question: "Can I download your resume/CV for information?",
      answer: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and full stack development achievements."
    },
    {
      question: "Are you available for freelance full stack projects?",
      answer: "Yes, I'm available for freelance full stack development projects. I can help with web applications, APIs, database design, and complete end-to-end solutions. Feel free to contact me to discuss your project requirements."
    },
    {
      question: "What types of projects have you worked on?",
      answer: "I've worked on various full stack projects including e-commerce platforms, learning management systems, blood donation platforms, and business applications. Each project involved both frontend and backend development with database integration."
    },
    {
      question: "How do you ensure code quality and performance?",
      answer: "I follow best practices including code reviews, testing, performance optimization, and clean architecture principles. I use modern development tools, version control, and implement responsive design for optimal user experience across all devices."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-green-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-0.5 bg-white mr-3"></div>
            <span className="text-white font-medium">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Questions?{" "}
            <span style={{ color: '#FDAE1B', fontStyle: 'italic', fontFamily: 'cursive' }}>
              Look here.
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-lg transition-all duration-300 ${
                openIndex === index
                  ? 'bg-white shadow-lg'
                  : 'bg-green-700 hover:bg-green-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span
                  className={`text-lg font-semibold ${
                    openIndex === index ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openIndex === index
                      ? 'bg-gray-200'
                      : 'bg-green-600'
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      openIndex === index ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
