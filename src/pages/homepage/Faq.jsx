import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What areas do you cover in Lagos?",
    answer:
      "We specialize in prime locations including Lekki Phase 1, Lekki Phase 2, Ikoyi, and Victoria Island.",
  },
  {
    question: "How long does the property development process typically take?",
    answer:
      "The timeline varies depending on the project scope, but we generally aim to complete developments within 12-24 months.",
  },
  {
    question: "What types of properties do you offer for sale or rent?",
    answer:
      "We offer a wide range of residential and commercial properties, from luxury apartments to office spaces and retail units.",
  },
  {
    question: "How can I schedule a consultation with your team?",
    answer:
      "You can easily book a consultation through our website or by calling our office. We offer both in-person and virtual meetings.",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary py-6 px-5 lg:px-10 rounded-2xl">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="lg:text-lg text-white font-semibold">{question}</span>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className={`text-white transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 text-white animate-fadeIn">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="py-24" id="faqs">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl text-center font-bold pb-20 underline decoration-secondary underline-offset-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
