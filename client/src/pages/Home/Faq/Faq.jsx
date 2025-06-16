import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icon from lucide-react

const faqs = [
  {
    question: "How can I join a beach cleanup near me?",
    answer:
      "You can browse upcoming cleanup events on our Events page and register directly from there.",
  },
  {
    question: "What are eco-coins and how do I earn them?",
    answer:
      "Eco-coins are rewards for participating in events. Earn them by volunteering and completing eco-missions.",
  },
  {
    question: "Is this platform only for students or can anyone volunteer?",
    answer:
      "Anyone passionate about the environment can join—students, professionals, or retirees!",
  },
  {
    question: "How do I partner my NGO with Reefresh?",
    answer:
      "Fill out our partnership form on the About page and we’ll get back to you shortly.",
  },
  {
    question: "Can I host my own event on Reefresh?",
    answer:
      "Yes! NGOs and communities can list their cleanup drives through the host event form.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-black">
        ReeFrequently Asked <span className="text-teal-600">Questions</span>
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Got doubts? We’ve cleaned them up for you—just like our beaches!
      </p>

      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggle(index)}
            >
              <span className="text-sm font-medium text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
