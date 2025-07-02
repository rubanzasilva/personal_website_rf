import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white pt-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Rubanza Silver</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Machine Learning Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I build intelligent systems and beautiful web experiences. 
              Specializing in PyTorch, fastai, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#portfolio" className="btn-primary">
                View Portfolio
              </Link>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/silver-portrait.webp"
                alt="Rubanza Silver"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;