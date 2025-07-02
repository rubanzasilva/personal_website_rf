const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              I am a coder with a background in Software Engineering. My work and interest lie in 
              working on various steps of the machine learning lifecycle from Exploratory Data Analysis, 
              Data wrangling, Feature Engineering to Model building, deployment, testing, monitoring, etc.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I integrate machine learning models into general software solutions, all in the context 
              of solving a given problem. I am proficient with Python, PyTorch, and many other libraries 
              such as fastai, sklearn, etc.
            </p>
            <p className="text-lg text-gray-700">
              I also have over 6 years of experience developing software applications using HTML, CSS, 
              Javascript, React JS, and modern web frameworks.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center space-x-6">
            <a 
              href="https://github.com/rubanzasilva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.kaggle.com/rubanzasilva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/rubanzasilver" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;