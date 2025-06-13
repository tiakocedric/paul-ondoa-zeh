import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              PO
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Paul Ondoa Zeh
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
              Développeur Web & Mobile
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Développeur passionné par les technologies modernes et l'intelligence artificielle, 
              créant des solutions numériques innovantes et performantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <MapPin size={20} className="text-blue-600" />
              <span>Douala, Cameroun</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Phone size={20} className="text-blue-600" />
              <span>+237 695249787</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Mail size={20} className="text-blue-600" />
              <span>paulondoa@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://linkedin.com/in/paul-ondoa-zeh-38666936b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/paulondoa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;