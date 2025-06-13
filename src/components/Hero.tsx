import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Avatar with Glow Effect */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                PO
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-cyan-500/50 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Paul Ondoa Zeh
              </span>
            </h1>
            
            <div className="relative mb-6 animate-fade-in-up delay-400">
              <p className="text-2xl md:text-3xl text-purple-300 font-semibold mb-2">
                Développeur Web & Mobile
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <span className="text-lg">Spécialiste IA & Technologies Modernes</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up delay-600">
              Créateur de solutions numériques innovantes, alliant expertise technique et intelligence artificielle 
              pour transformer vos idées en expériences digitales exceptionnelles.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 animate-fade-in-up delay-800">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center space-x-3 text-white">
                <div className="p-2 bg-purple-500/30 rounded-lg">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">Douala, Cameroun</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center space-x-3 text-white">
                <div className="p-2 bg-blue-500/30 rounded-lg">
                  <Phone size={20} />
                </div>
                <span className="font-medium">+237 695249787</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center justify-center space-x-3 text-white">
                <div className="p-2 bg-cyan-500/30 rounded-lg">
                  <Mail size={20} />
                </div>
                <span className="font-medium">paulondoa@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-1000">
            <a
              href="https://linkedin.com/in/paul-ondoa-zeh-38666936b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
            >
              <Linkedin size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-blue-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://github.com/paulondoa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
            >
              <Github size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 to-gray-800/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://wa.me/237695249787"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2"
            >
              <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/50 to-green-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;