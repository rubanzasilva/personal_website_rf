export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  links: {
    demo?: string;
    code?: string;
    writeup?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'bentoml-deployment',
    title: 'ML Model Deployment with BentoML',
    description: 'Serving and deploying a binary classification machine learning model using BentoML',
    longDescription: 'Built a complete ML deployment pipeline using BentoML for serving binary classification models with production-ready features.',
    image: '/images/projects/dalle_deployment.webp',
    techStack: ['Python', 'BentoML', 'Machine Learning', 'Docker'],
    links: {
      demo: 'https://nbsanity.com/static/64b506b80020adafd31defb4d6afb508/load.html'
    },
    featured: true
  },
  {
    id: 'academic-success',
    title: 'Academic Success Prediction',
    description: 'A classification model to predict students dropout and academic success rate',
    longDescription: 'Developed a comprehensive machine learning solution using gradient boosting and neural networks to predict student outcomes.',
    image: '/images/projects/academic_success.jpg',
    techStack: ['Python', 'fastai', 'XGBoost', 'Gradient Boosting'],
    links: {
      code: 'https://www.kaggle.com/code/rubanzasilva/fastai-gradient-boosting',
      writeup: 'https://www.kaggle.com/competitions/playground-series-s4e6/discussion/517020'
    },
    featured: true
  },
  {
    id: 'used-cars-price',
    title: 'Used Car Price Prediction',
    description: 'A regression model to predict the price of used cars based on various attributes',
    image: '/images/projects/used_cars.jpg',
    techStack: ['Python', 'fastai', 'CatBoost', 'Feature Engineering'],
    links: {
      code: 'https://www.kaggle.com/code/rubanzasilva/used-cars-eda-fastai-gradient-boosting',
      writeup: 'https://www.kaggle.com/competitions/playground-series-s4e9/discussion/544513'
    }
  },
  {
    id: 'mushroom-classification',
    title: 'Poisonous Mushroom Prediction',
    description: 'Binary classification model to predict mushroom edibility based on physical characteristics',
    image: '/images/projects/mushroomAnatomy.jpg',
    techStack: ['Python', 'fastai', 'Gradient Boosting', 'Data Analysis'],
    links: {
      code: 'https://www.kaggle.com/code/rubanzasilva/fast-ai-gradient-boosting'
    }
  },
  {
    id: 'insurance-cross-selling',
    title: 'Insurance Cross Selling',
    description: 'Classification model to predict customer response to automobile insurance offers',
    image: '/images/projects/insurance_pexels.jpg',
    techStack: ['Python', 'Neural Networks', 'fastai', 'LightGBM'],
    links: {
      code: 'https://www.kaggle.com/code/rubanzasilva/fastai-neural-network-gradient-boosting'
    }
  },
  {
    id: 'antelope-classifier',
    title: 'Antelope Classifier',
    description: 'Deep learning model for antelope species classification with deployment UI',
    longDescription: 'Built and deployed a CNN model for classifying different antelope species, complete with a user-friendly interface.',
    image: '/images/projects/antelopes.jpeg',
    techStack: ['Python', 'PyTorch', 'Hugging Face', 'Computer Vision'],
    links: {
      demo: 'https://huggingface.co/spaces/silvaKenpachi/antelopeClassifier',
      code: 'https://rubanzasilva.github.io/antelope-classifier-documentation/'
    },
    featured: true
  },
  {
    id: 'zicofe-website',
    title: 'Zigoti Coffee Website',
    description: 'Full-stack e-commerce website for Ugandan coffee house covering the entire value chain',
    image: '/images/projects/ZICOFE.JPG',
    techStack: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    links: {
      demo: 'https://www.zicofe.com/'
    }
  },
  {
    id: 'suwik-investments',
    title: 'Suwik Investments Website',
    description: 'E-commerce platform for agricultural products export company',
    image: '/images/projects/suwikLogo.jpeg',
    techStack: ['React', 'Next.js', 'TypeScript', 'E-commerce'],
    links: {
      demo: 'https://www.suwik.xyz/',
      code: 'https://github.com/rubanzasilva/suwikEcommerce'
    }
  }
];

export const skills = {
  'Machine Learning': ['PyTorch', 'fastai', 'scikit-learn', 'TensorFlow'],
  'ML Libraries': ['XGBoost', 'CatBoost', 'LightGBM', 'Neural Networks'],
  'Data Science': ['EDA', 'Feature Engineering', 'Model Deployment', 'BentoML'],
  'Frontend': ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  'Backend': ['Python', 'Node.js', 'API Development'],
  'Tools & Others': ['Git', 'Docker', 'Jupyter', 'Tailwind CSS']
};

export const experience = [
  {
    year: '2024',
    title: 'Machine Learning Engineer',
    description: 'Developing and deploying ML models for production environments'
  },
  {
    year: '2018-Present',
    title: 'Full-Stack Developer',
    description: '6+ years developing web applications with modern frameworks'
  },
  {
    year: 'Ongoing',
    title: 'Open Source Contributor',
    description: 'Contributing to ML and web development projects on GitHub and Kaggle'
  }
];