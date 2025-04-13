import React from 'react';

const skills = [
  "HTML", "CSS", "Tailwind", "JavaScript", "React", "Java", "C#",
  "Database", "Communication", "Git", "Github", "Canva",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-32 text-white pt-32 pb-24 px-6 font-[Poppins] bg-[#0f172a] min-h-screen"
    >
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-12">
        My <span className="text-purple-500">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e293b] hover:bg-purple-500 hover:text-white text-center py-4 px-6 rounded-2xl shadow-md transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
