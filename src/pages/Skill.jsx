import React from 'react';

const skills = [
  { name: 'HTML5', level: 'Advanced', color: 'text-orange-500', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0l1.89 21.3L12 24l8.61-2.7L22.5 0zm16.2 6.75l-.13 1.5-.13 1.5H7.56l.13 1.5.13 1.5h7.44l-.13 1.5-.13 1.5H8.7l.13 1.5.13 1.5h5.08l-.13 1.5-.13 1.5-2.78.84-2.78-.84-.18-2.01h1.5l.09 1.01 1.37.41 1.37-.41.09-1.01h1.5l-.18 2.01-2.78.84-2.78-.84L5.7 2.25h12.6z"/></svg>
  ) },
  { name: 'CSS3', level: 'Advanced', color: 'text-blue-500', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 0l1.89 21.3L12 24l8.61-2.7L22.5 0zm16.2 6.75l-.13 1.5-.13 1.5H7.56l.13 1.5.13 1.5h7.44l-.13 1.5-.13 1.5H8.7l.13 1.5.13 1.5h5.08l-.13 1.5-.13 1.5-2.78.84-2.78-.84-.18-2.01h1.5l.09 1.01 1.37.41 1.37-.41.09-1.01h1.5l-.18 2.01-2.78.84-2.78-.84L5.7 2.25h12.6z"/></svg>
  ) },
  { name: 'JavaScript', level: 'Advanced', color: 'text-yellow-300', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M2 2v20h20V2H2zm11.93 17.07c-.13.29-.38.52-.7.62-.32.1-.66.07-.95-.09-.29-.16-.5-.44-.57-.77l-.02-.09c-.07-.33.01-.68.22-.94.21-.26.54-.41.88-.41.34 0 .67.15.88.41.21.26.29.61.22.94l-.02.09c-.07.33-.28.61-.57.77zm-4.07-1.07c-.13.29-.38.52-.7.62-.32.1-.66.07-.95-.09-.29-.16-.5-.44-.57-.77l-.02-.09c-.07-.33.01-.68.22-.94.21-.26.54-.41.88-.41.34 0 .67.15.88.41.21.26.29.61.22.94l-.02.09c-.07.33-.28.61-.57.77zm7.14-2.07c-.13.29-.38.52-.7.62-.32.1-.66.07-.95-.09-.29-.16-.5-.44-.57-.77l-.02-.09c-.07-.33.01-.68.22-.94.21-.26.54-.41.88-.41.34 0 .67.15.88.41.21.26.29.61.22.94l-.02.09c-.07.33-.28.61-.57.77zm-4.07-1.07c-.13.29-.38.52-.7.62-.32.1-.66.07-.95-.09-.29-.16-.5-.44-.57-.77l-.02-.09c-.07-.33.01-.68.22-.94.21-.26.54-.41.88-.41.34 0 .67.15.88.41.21.26.29.61.22.94l-.02.09c-.07.33-.28.61-.57.77zm7.14-2.07c-.13.29-.38.52-.7.62-.32.1-.66.07-.95-.09-.29-.16-.5-.44-.57-.77l-.02-.09c-.07-.33.01-.68.22-.94.21-.26.54-.41.88-.41.34 0 .67.15.88.41.21.26.29.61.22.94l-.02.09c-.07.33-.28.61-.57.77z"/></svg>
  ) },
  { name: 'C++', level: 'Intermediate', color: 'text-blue-400', icon: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
  ) },
];

function SkillPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">My Skills</h1>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center bg-gray-900 border border-gray-800 rounded-xl p-6 shadow hover:border-yellow-400 transition min-h-[140px] ${skill.color}`}
          >
            {skill.icon}
            <span className="text-2xl font-semibold mb-2 mt-2">{skill.name}</span>
            <span className="text-gray-400 text-sm">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillPage;
