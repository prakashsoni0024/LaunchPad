"use client"
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the clicked question
    }
  };

  const questions = [
    {
      question: "How can I list my startup on LaunchPad?",
      answer:
        "Simply sign up as a founder, go to your dashboard, and add details like your startup name, description, funding goal, and pitch deck link.",
    },
    {
      question: "How do investors fund a startup?",
      answer:
        "Investors can visit any startup profile and use Razorpay to contribute securely with their preferred payment method.",
    },
    {
      question: "Can I track how much funding my startup has received?",
      answer:
        "Yes! Founders have a dashboard where they can see total funds raised, list of investors, and progress towards their funding goal.",
    },
    {
      question: "Is LaunchPad free to use?",
      answer:
        "Yes, LaunchPad is completely free for students and early-stage founders. We only charge a small transaction fee on successful funding.",
    },
  ];

  return (
    <section className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left text-lg font-medium text-white py-4 px-6 bg-[#03172b] border border-gray-500 rounded-md focus:outline-none hover:bg-[#08213a] transition-colors"
            >
              {item.question}
            </button>

            {activeIndex === index && (
              <div className="mt-2 text-gray-700 px-6 py-4 bg-[#FFF7ED] border border-[#F97316] rounded-md">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
