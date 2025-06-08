import { useEffect, useState } from 'react';
import { BsEyeFill } from 'react-icons/bs';
import { RiEyeCloseFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const countries = {
  India: ['Mumbai', 'Delhi', 'Bangalore'],
  USA: ['New York', 'Los Angeles', 'Chicago'],
  Canada: ['Toronto', 'Vancouver', 'Montreal'],
  Japan: ['Tokyo', 'Osaka', 'Kyoto'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane']
};

export default function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneCode: '+91',
    phoneNumber: '',
    country: '',
    city: '',
    pan: '',
    aadhar: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.username.trim()) errs.username = 'Username is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.password.trim()) errs.password = 'Password is required';
    if (!/^\d{10}$/.test(formData.phoneNumber)) errs.phoneNumber = 'Phone number must be 10 digits';
    if (!formData.country) errs.country = 'Country is required';
    if (!formData.city) errs.city = 'City is required';
    if (!/^\w{10}$/.test(formData.pan)) errs.pan = 'PAN must be 10 characters';
    if (!/^\d{12}$/.test(formData.aadhar)) errs.aadhar = 'Aadhar must be 12 digits';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/submitted', { state: formData });
    }
  };

  useEffect(() => {
    validate();
  }, [formData]);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] p-4">
      {/* Floating circles in background */}
      <div className="absolute -top-10 left-20 w-64 h-64 rounded-full bg-purple-600/20 blur-lg  animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-600/20 blur-lg animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-600/20 blur-lg animate-float-delay-2"></div>
      
      {/* Main form container with glassmorphism effect */}
      <div className="relative w-full max-w-5xl bg-white/50 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-20">
        {/* Decorative gradient border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/30 to-transparent -z-10">
          <div className="w-full h-full bg-gradient-to-br from-gray-900/80 to-gray-900 rounded-3xl"></div>
        </div>
        
        {/* Form content */}
        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              User Registration
            </h2>
            <p className="text-gray-300">Please fill in all the required fields</p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['firstName', 'lastName', 'username', 'email', 'pan', 'aadhar'].map((field) => (
              <div key={field} className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 capitalize transition-all duration-200 group-focus-within:text-pink-400">
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
                />
                {errors[field] && <p className="mt-1 text-sm text-pink-400">{errors[field]}</p>}
              </div>
            ))}

            {/* Password */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 transition-all duration-200 group-focus-within:text-pink-400">
                Password
              </label>
              <input
                type={formData.showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
              />
              <label className="flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-gray-200 cursor-pointer transition-colors relative ">
                <input
                  type="checkbox"
                  name="showPassword"
                  checked={formData.showPassword}
                  onChange={handleChange}
                  className="w-4 h-4 accent-pink-500 hidden"
                />
                {formData.showPassword ? 
                <RiEyeCloseFill className='absolute -top-12 right-4 text-2xl text-pink-400' />:<BsEyeFill className='absolute -top-12 right-4 text-2xl text-pink-400' />
                }
              </label>
              {errors.password && <p className="mt-1 text-sm text-pink-400">{errors.password}</p>}
            </div>

            {/* Phone */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 transition-all duration-200 group-focus-within:text-pink-400">
                Phone Number
              </label>
              <div className="flex gap-3">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-24 px-3 py-3 bg-white/20 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
                >
                  <option value="+91" >+91 (IN)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+81">+81 (JP)</option>
                  <option value="+61">+61 (AU)</option>
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter 10-digit number"
                  className="flex-1 px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
                />
              </div>
              {errors.phoneNumber && <p className="mt-1 text-sm text-pink-400">{errors.phoneNumber}</p>}
            </div>

            {/* Country & City */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 transition-all duration-200 group-focus-within:text-pink-400">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200"
              >
                <option value="">Select Country</option>
                {Object.keys(countries).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="mt-1 text-sm text-pink-400">{errors.country}</p>}
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2 transition-all duration-200 group-focus-within:text-pink-400">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.country}
                className="w-full px-4 py-3 bg-white/5 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all duration-200 disabled:opacity-50"
              >
                <option value="">{formData.country ? 'Select City' : 'Select Country First'}</option>
                {(countries[formData.country] || []).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.city && <p className="mt-1 text-sm text-pink-400">{errors.city}</p>}
            </div>

            {/* Submit button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl text-white font-semibold shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                Register Now
                <span className="ml-2">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Add some CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(-50px) rotate(0deg); }
          50% { transform: translateY(0px) rotate(5deg); }
          100% { transform: translateY(50px) rotate(0deg); }
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