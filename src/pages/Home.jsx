import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-600/20 blur-3xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-600/20 blur-2xl animate-float-delay-2"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Form Validation App
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern React form with comprehensive validation, beautiful UI, and seamless user experience.
          </p>
        </header>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl">
          {[
            {
              icon: '✅',
              title: 'Real-time Validation',
              description: 'Instant feedback as users fill out the form'
            },
            {
              icon: '🔒',
              title: 'Secure Data Handling',
              description: 'Properly managed form state and submissions'
            },
            {
              icon: '🎨',
              title: 'Beautiful UI',
              description: 'Glassmorphism design with smooth animations'
            },
            {
              icon: '📱',
              title: 'Responsive',
              description: 'Works perfectly on all device sizes'
            },
            {
              icon: '⚡',
              title: 'Fast Performance',
              description: 'Optimized for quick loading and interaction'
            },
            {
              icon: '🧩',
              title: 'Modular Components',
              description: 'Easy to extend and customize'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/form"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            Go to Form
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400">
          <p>Built with React, Tailwind CSS, and React Router </p>
          <p> Made with ❤️ By : Roshan Suthar</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/roshansuthar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/roshansuthar1105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:roshansuthar2023@gmail.com"
              className="hover:text-gray-300 transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
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