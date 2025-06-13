import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, DollarSign } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GeoFriends App',
      description: 'Application mobile de géolocalisation d\'amis avec intégration de fonctionnalités IA pour suggérer des points de rencontre optimaux.',
      technologies: ['React Native', 'Supabase', 'IA', 'Géolocalisation'],
      type: 'Mobile',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MonBudget',
      description: 'Application web de gestion de finances personnelles avec tableaux de bord interactifs et analyses de dépenses.',
      technologies: ['Vue.js', 'Firebase', 'Chart.js', 'PWA'],
      type: 'Web',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'MonPortfolio',
      description: 'Site personnel de présentation avec code partiellement généré avec l\'aide d\'IA pour optimiser les performances et l\'expérience utilisateur.',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'IA'],
      type: 'Web',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projets Personnels
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
              {/* Project Header */}
              <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <project.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    <ExternalLink size={16} />
                    <span>Voir le projet</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Découvrez plus de projets sur mon{' '}
            <a href="https://github.com/paulondoa" className="text-blue-600 hover:text-blue-700 font-semibold">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;