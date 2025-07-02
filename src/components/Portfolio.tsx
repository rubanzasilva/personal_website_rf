'use client';

import { useState } from 'react';
import { projects } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured) 
    : projects;

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A collection of my work in machine learning and web development
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-white text-primary-500 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'featured' 
                  ? 'bg-white text-primary-500 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;