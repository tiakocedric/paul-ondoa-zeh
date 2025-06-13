import React from 'react';
import { Target, Zap, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
              <Sparkles className="text-purple-600" size={20} />
              <span className="text-purple-800 font-medium">Découvrez mon profil</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-6">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl mr-4">
                    <Target className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent">
                    Objectif Professionnel
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  Développeur passionné par les technologies web et mobiles, avec une bonne maîtrise 
                  des frameworks modernes. Je travaille en synergie avec l'intelligence artificielle (IA) 
                  pour concevoir des solutions numériques intelligentes et performantes.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Mon approche inclut l'usage d'IA pour la génération de code, l'amélioration de projets 
                  existants et l'accélération du développement. Je cherche à intégrer une équipe dynamique 
                  pour concevoir des solutions innovantes, centrées sur les besoins utilisateurs.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="group bg-gradient-to-br from-purple-500 to-blue-600 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Innovation IA</h4>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  Utilisation avancée de l'IA pour optimiser le développement et créer des solutions intelligentes.
                </p>
                <div className="mt-4 flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>

              <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Collaboration</h4>
                </div>
                <p className="text-green-100 leading-relaxed">
                  Travail en équipe agile avec un focus sur l'expérience utilisateur et la qualité du code.
                </p>
                <div className="mt-4 flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">2+</div>
                  <div className="text-gray-600 font-medium">Années d'expérience</div>
                </div>
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Projets réalisés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;