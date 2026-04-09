import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Heading from "../../../shared/heading/Heading";
import Text from "../../../shared/text/Text";

const faqsData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging proper posture throughout the day.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, it is adjustable and designed to fit different body types comfortably for both men and women.",
  },
  {
    question: "Does it really help with back pain?",
    answer:
      "It can help reduce mild back pain by improving posture, but for severe conditions consult a doctor.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models include vibration reminders to correct posture in real time.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can subscribe with your email to receive instant restock notifications.",
  },
  {
    question: "Can I wear it all day?",
    answer:
      "It is recommended to wear it for a few hours daily rather than all day for best results.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFAQs = showAll ? faqsData : faqsData.slice(0, 4);

  return (
    <div className="px-4 py-10">
      <div className="max-w-3xl mx-auto mb-10">
        <Heading className="text-secondary">Frequently Asked Question (FAQ)</Heading>
        <Text>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</Text>
      </div>
      {/* FAQ List */}
      <div className="space-y-4">
        {visibleFAQs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-300 ${
              openIndex === index
                ? "bg-primary/10 border-primary shadow-md"
                : "bg-base-100 border-base-300"
            }`}
          >
            {/* Question */}
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
            >
              <span className="font-medium text-sm sm:text-base">
                {faq.question}
              </span>

              {/* Icon rotate */}
              <FiChevronDown
                className={`text-xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-sm opacity-80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8 gap-3 items-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full bg-primary hover:bg-primary/60 text-black font-medium transition"
        >
          {showAll ? "Show Less" : "See More FAQ’s"}
        </button>
      </div>
    </div>
  );
};

export default Faq;