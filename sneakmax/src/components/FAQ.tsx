import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { question: "What is SneakMax?", answer: "SneakMax is a sneaker lover's paradise." },
        { question: "How do I order?", answer: "You can order through our website." },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
                    {openIndex === index && <p>{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
