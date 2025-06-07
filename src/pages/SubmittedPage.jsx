import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SubmittedPage() {
  // const { state: obj1 } = useLocation();
  const obj1 = {
    firstName: "Roshan",
    lastName: "Suthar",
    username: "roshansuthar1105",
    email: "test1@gmail.com",
    password: "12341234",
    showPassword: false,
    phoneCode: "+91",
    phoneNumber: "09876543210",
    country: "India",
    city: "Mumbai",
    pan: "1234123412",
    aadhar: "123412341234"
  };

  useEffect(() => {
    console.log(obj1);
  }, [obj1]);

  if (!obj1) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-600/20 blur-3xl animate-float-delay"></div>
        
        <div className="relative w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 p-8 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
            No Data Submitted
          </h2>
          <p className="text-gray-300">Please go back and fill out the form</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      {/* Floating background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-600/20 blur-3xl animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-600/20 blur-2xl animate-float-delay-2"></div>
      
      {/* Main container with glassmorphism effect */}
      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10">
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/30 to-transparent -z-10">
          <div className="w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-900 rounded-3xl"></div>
        </div>
        
        <div className="p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Registration Successful!
            </h2>
            <p className="text-gray-300">Here are your submitted details</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(obj1).map(([key, value]) =>
              key !== 'showPassword' && key !== 'password' ? (
                <div key={key} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h3 className="text-sm font-medium text-pink-400 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <p className="text-white">
                    {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                  </p>
                </div>
              ) : null
            )}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl text-white font-semibold shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              ← Back to Form
            </button>
          </div>
        </div>
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