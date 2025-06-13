import React from 'react';
import { Code, Database, Smartphone, Wrench, Brain, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Travail avec l\'IA',
      skills: ['Génération de code assistée', 'Amélioration de projets existants', 'Prototypage rapide', 'Optimisation de performances', 'Documentation technique'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Langages & Web',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'React.js', 'Vue.js', 'Node.js', 'Laravel'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      skills: ['React Native', 'Flutter', 'Applications hybrides', 'UI/UX Mobile'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Wrench,
      title: 'Outils & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma'],
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Globe,
      title: 'Autres',
      skills: ['API REST', 'Authentification', 'Géolocalisation', 'Responsive Design', 'Paiement mobile'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;