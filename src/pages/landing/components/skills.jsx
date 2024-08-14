import React from 'react';

const skillsData = [
  { name: 'JavaScript', percentage: 50 },
  { name: 'React', percentage: 75 },
  { name: 'CSS', percentage: 70 },
  { name: 'HTML', percentage: 70 },
  { name: 'React-Native', percentage: 40 },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <div id="skills" className="p-6 max-w-6xl mx-auto">
      <h2 className=" my-20 text-center text-4xl">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div 
            key={index} 
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
              <span className="text-lg font-semibold text-gray-700">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
