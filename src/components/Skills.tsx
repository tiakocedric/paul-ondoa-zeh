import React from 'react';
import { Code, Database, Smartphone, Wrench, Brain, Globe, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Travail avec l\'IA',
      skills: ['Génération de code assistée', 'Amélioration de projets existants', 'Prototypage rapide', 'Optimisation de performances', 'Documentation technique'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      delay: 0
    },
    {
      icon: Code,
      title: 'Langages & Web',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3', 'React.js', 'Vue.js', 'Node.js', 'Laravel'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      delay: 200
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      skills: ['React Native', 'Flutter', 'Applications hybrides', 'UI/UX Mobile'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      delay: 400
    },
    {
      icon: Database,
      title: 'Bases de données',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      delay: 600
    },
    {
      icon: Wrench,
      title: 'Outils & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma'],
      color: 'from-gray-500 to-slate-500',
      bgColor: 'from-gray-50 to-slate-50',
      delay: 800
    },
    {
      icon: Globe,
      title: 'Autres',
      skills: ['API REST', 'Authentification', 'Géolocalisation', 'Responsive Design', 'Paiement mobile'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      delay: 1000
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-6 border border-white/20">
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Mes expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${category.delay}ms` }}
            >
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300"
                        style={{ animationDelay: `${category.delay + skillIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Niveau d'expertise</span>
                      <span className="text-sm text-purple-400 font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;