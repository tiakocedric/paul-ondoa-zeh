import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Freelance',
      location: 'Douala, Cameroun',
      period: 'Janvier 2023 - Présent',
      type: 'Freelance',
      achievements: [
        'Création de sites vitrines et e-commerces (Laravel, React, WordPress)',
        'Développement d\'applications mobiles (React Native + Firebase/Supabase)',
        'Intégration de systèmes de paiement mobile (Orange Money, MTN MoMo)',
        'Utilisation d\'outils IA pour automatiser des tâches de développement et documenter les projets',
        'Maintenance technique et support client'
      ]
    },
    {
      title: 'Stagiaire Développeur',
      company: 'Startup XYZ',
      location: 'Yaoundé, Cameroun',
      period: 'Juin 2022 - Décembre 2022',
      type: 'Stage',
      achievements: [
        'Participation au développement d\'une plateforme web de réservation',
        'Mise en place de l\'authentification et de la base de données Supabase',
        'Test et débogage des fonctionnalités en équipe Agile'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expérience Professionnelle
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.type === 'Freelance' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-600 mt-2">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mt-1">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;