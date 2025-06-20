import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: '✅',
      title: 'Real-time Validation',
      description: 'Instant feedback as users fill out the form',
      bgColor: 'bg-emerald-500/20',
      bgHoverColor: 'hover:bg-emerald-500/30',
    },
    {
      icon: '🔒',
      title: 'Secure Data Handling',
      description: 'Properly managed form state and submissions',
      bgColor: 'bg-cyan-500/20',
      bgHoverColor: 'hover:bg-cyan-500/30',
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Glassmorphism design with smooth animations',
      bgColor: 'bg-pink-500/20',
      bgHoverColor: 'hover:bg-pink-500/30',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Works perfectly on all device sizes',
      bgColor: 'bg-indigo-500/20',
      bgHoverColor: 'hover:bg-indigo-500/30',
    },
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized for quick loading and interaction',
      bgColor: 'bg-yellow-400/20',
      bgHoverColor: 'hover:bg-yellow-400/30',
    },
    {
      icon: '🧩',
      title: 'Modular Components',
      description: 'Easy to extend and customize',
      bgColor: 'bg-fuchsia-500/20',
      bgHoverColor: 'hover:bg-fuchsia-500/30',
    },
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] ">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-600/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-500/20 blur-2xl animate-float-delay-2"></div>
  
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Form Validation App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern React form with comprehensive validation, beautiful UI, and seamless user experience.
          </p>
        </header>
  
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-2 mb-16 w-full max-w-6xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cursor-default backdrop-blur-sm border border-white/10 rounded-xl p-6 py-12 ${feature.bgHoverColor} transition-all duration-300 ${feature.bgColor}`}
            >
              <div className="text-3xl flex items-center gap-2 align-bottom">
                {feature.icon}
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
  
        {/* CTA */}
        <div className="text-center">
          <Link
            to="/form"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Go to Form
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
  
        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 flex flex-col items-center gap-1">
          <p>Built with React, Tailwind CSS, and React Router </p>
          <p>
            Made with ❤️ By :
            <a
              href="https://www.linkedin.com/in/roshansuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-300 transition-colors"
            >
              {' '}
              Roshan Suthar{' '}
            </a>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/roshansuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <span className="text-white">LinkedIn</span>
              <FaLinkedin className="text-cyan-400" />
            </a>
            <a
              href="https://github.com/roshansuthar1105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <span className="text-white">GitHub</span>
              <FaGithub className="text-black-500" />
            </a>
            <a
              href="mailto:roshansuthar2023@gmail.com"
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              <span className="text-white">Email</span>
              <FaEnvelope className="text-white" />
            </a>
          </div>
        </footer>
      </div>
  
      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float 12s ease-in-out infinite 4s;
        }
      `}</style>
    </div>
  );  
}