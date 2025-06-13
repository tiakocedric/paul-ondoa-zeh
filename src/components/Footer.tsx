import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Paul Ondoa Zeh</h3>
            <p className="text-gray-400 text-lg">
              Développeur Web & Mobile | Spécialiste IA
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>Fait avec</span>
                <Heart size={16} className="text-red-500" />
                <span>et</span>
                <Code size={16} className="text-blue-500" />
                <span>à Douala, Cameroun</span>
              </div>
              
              <div className="text-gray-400">
                <p>&copy; 2024 Paul Ondoa Zeh. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;