import React from "react";

function About() {
  const skills = [
    { name: "Python", level: 80 },
    { name: "HTML", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "JavaScript", level: 75 },
    { name: "Django", level: 65 },
    { name: "React", level: 70 },
    { name: "SQL", level: 90 },
  ];

  return (
    <section id="about" className="bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="underline text-3xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed mb-12 text-justify">
          I'm <span className="text-blue-400">Abinanthanan A</span>, a recent B.Tech graduate in 
          Information Technology from IFET College of Engineering with a strong passion for 
          web design, development, software testing, and networking. I have solid expertise in 
          Python, HTML, CSS, JavaScript, SQL, and Django frameworks and hands-on experience 
          working on small projects in these areas. I hold a Cisco certification and practical 
          experience in networking. I am eager to apply my skills and contribute to impactful 
          IT projects.
        </p>

        <h2 className="underline text-3xl font-bold mb-6">Skills</h2>
        <p className="text-lg mb-6">I am excited to share the skills I have learned.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full text-left">
              <p className="uppercase text-lg mb-1">
                {skill.name} - {skill.level}%
              </p>
              <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
