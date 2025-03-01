import React from "react";

const certifications = [
  {
    title: "HTML",
    description:
      "I have successfully completed a certification in HTML, where I gained a strong understanding of web structure, semantic markup, and best practices for creating accessible and responsive web pages.",
    icon: "📄",
  },
  {
    title: "CSS",
    description:
      "I have earned a certification in CSS, equipping me with skills to style and enhance the visual appeal of web pages using modern CSS frameworks and responsive design techniques.",
    icon: "🎨",
  },
  {
    title: "JavaScript",
    description:
      "I have completed a certification in JavaScript, gaining a solid foundation in programming and the ability to create dynamic, interactive web applications.",
    icon: "📜",
  },
  {
    title: "Python",
    description:
      "I hold a certification in Python, which provided me with a strong foundation in programming and object-oriented programming (OOP) concepts.",
    icon: "🐍",
  },
  {
    title: "Internships",
    description:
      "I gained practical experience and valuable insights in both web development and machine learning during my internship.",
    icon: "💼",
  },
  {
    title: "Paper Presentations",
    description:
      "I presented a paper on Enhancing Wellness and Location Monitoring for Mountain Climbers in IoT, deepening my problem-solving skills.",
    icon: "📑",
  },
];

function Certification() {
  return (
    <section id="certification" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center underline mb-8">
          Certifications
        </h2>
        <p className="text-center text-lg mb-10">
          I'm excited to share that I've completed the following certifications
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
