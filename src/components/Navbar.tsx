import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, GraduationCap, BookOpen, School, Phone, X, Loader2, Code } from 'lucide-react';
import { contactService } from '../services/api';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917675993916', '_blank');
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">IRSDL Projects</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/projects/btech" icon={BookOpen} text="B.Tech Projects" onClick={handleNavClick} />
            <NavLink to="/projects/mtech" icon={GraduationCap} text="M.Tech Projects" onClick={handleNavClick} />
            <NavLink to="/projects/degree" icon={School} text="Degree Projects" onClick={handleNavClick} />
            <NavLink to="/projects/mca" icon={Code} text="MCA Projects" onClick={handleNavClick} />
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-2 px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-medium">+91 7675993916</span>
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center space-x-1 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Connect Us</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-1 p-2 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E]"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center space-x-1 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-md"
            >
              <Phone className="h-5 w-5" />
            </button>
            <button 
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden 
          fixed 
          inset-0 
          top-16 
          bg-white 
          z-40
          transform
          transition-transform
          duration-300
          ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="px-4 py-2 space-y-2">
          <MobileNavLink to="/projects/btech" icon={BookOpen} text="B.Tech Projects" onClick={handleNavClick} />
          <MobileNavLink to="/projects/mtech" icon={GraduationCap} text="M.Tech Projects" onClick={handleNavClick} />
          <MobileNavLink to="/projects/degree" icon={School} text="Degree Projects" onClick={handleNavClick} />
          <MobileNavLink to="/projects/mca" icon={Code} text="MCA Projects" onClick={handleNavClick} />
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactFormModal onClose={() => setShowContactForm(false)} />
      )}
    </nav>
  );
};

const NavLink: React.FC<{
  to: string;
  icon: React.ElementType;
  text: string;
  onClick?: () => void;
  className?: string;
}> = ({ 
  to,
  icon: Icon, 
  text,
  onClick,
  className = "hover:bg-gray-100"
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-1 px-4 py-2 rounded-md transition-colors ${className}`}
  >
    <Icon className="h-4 w-4" />
    <span>{text}</span>
  </Link>
);

const MobileNavLink: React.FC<{
  to: string;
  icon: React.ElementType;
  text: string;
  onClick?: () => void;
  className?: string;
}> = ({ 
  to,
  icon: Icon, 
  text,
  onClick,
  className = ""
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors ${className}`}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{text}</span>
  </Link>
);

interface ContactFormModalProps {
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    projectTitle: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const response = await contactService.submit(formData);
      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          mobile: '',
          email: '',
          projectTitle: ''
        });
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Connect With Us</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {success ? (
            <div className="text-center py-4">
              <div className="text-green-600 mb-2">Form submitted successfully!</div>
              <div className="text-gray-600">We'll get back to you soon.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Project Title
                </label>
                <input
                  type="text"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;