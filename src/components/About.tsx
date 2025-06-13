import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="text-blue-600 mr-3" size={28} />
                Objectif Professionnel
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Développeur passionné par les technologies web et mobiles, avec une bonne maîtrise 
                des frameworks modernes. Je travaille en synergie avec l'intelligence artificielle (IA) 
                pour concevoir des solutions numériques intelligentes et performantes.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                Mon approche inclut l'usage d'IA pour la génération de code, l'amélioration de projets 
                existants et l'accélération du développement. Je cherche à intégrer une équipe dynamique 
                pour concevoir des solutions innovantes, centrées sur les besoins utilisateurs.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <Zap className="text-blue-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-gray-900">Innovation IA</h4>
                </div>
                <p className="text-gray-700">
                  Utilisation avancée de l'IA pour optimiser le développement et créer des solutions intelligentes.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <div className="flex items-center mb-3">
                  <Users className="text-green-600 mr-3" size={24} />
                  <h4 className="text-xl font-semibold text-gray-900">Collaboration</h4>
                </div>
                <p className="text-gray-700">
                  Travail en équipe agile avec un focus sur l'expérience utilisateur et la qualité du code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;