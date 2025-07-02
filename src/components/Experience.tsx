import { experience } from '@/data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="gradient-text">Journey</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300"></div>
            
            {experience.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8">
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 mt-1.5"></div>
                
                {/* Content */}
                <div className="ml-20 bg-white rounded-lg p-6 shadow-lg card-hover">
                  <span className="text-primary-500 font-mono text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
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