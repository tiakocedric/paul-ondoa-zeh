import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Licence Professionnelle en Génie Logiciel',
      institution: 'Université de Douala',
      period: '2019 - 2022',
      type: 'Diplôme'
    }
  ];

  const certifications = [
    {
      name: 'Développement Web',
      provider: 'OpenClassrooms / Coursera',
      type: 'Certification'
    },
    {
      name: 'React & Firebase',
      provider: 'Udemy',
      type: 'Certification'
    }
  ];

  const languages = [
    { name: 'Français', level: 'Courant' },
    { name: 'Anglais', level: 'Intermédiaire' }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formation & Langues
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-blue-600 mr-3" size={28} />
              <h3 className="text-xl font-bold text-gray-900">Formation</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="text-green-600 mr-3" size={28} />
              <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-green-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-green-600 font-medium text-sm">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-7 h-7 bg-orange-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🗣</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Langues</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{lang.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    lang.level === 'Courant' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;