import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>MR Palle Circle, Tirupati - 517501</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                {/* <span>+91 9123456789</span> */}
                <a href="tel:+917675993916">
    <span>+91 7675993916</span>
</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                {/* <span>contact@irsdlprojects.com</span> */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=irsdl.project@gmail.com" target="_blank">
    <span>irsdl.project@gmail.com</span>
</a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/btech" className="hover:text-blue-400 transition-colors">
                  B.Tech Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/mtech" className="hover:text-blue-400 transition-colors">
                  M.Tech Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/degree" className="hover:text-blue-400 transition-colors">
                  Degree Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/mca" className="hover:text-blue-400 transition-colors">
                  MCA Projects
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-400 transition-colors">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
            <SocialIcon 
                icon={Facebook} 
                href="https://facebook.com/irsdlprojects" 
                label="Facebook"
              />
              <SocialIcon 
                icon={Twitter} 
                href="https://twitter.com/irsdlprojects" 
                label="Twitter"
              />
              <SocialIcon 
                icon={Linkedin} 
                href="https://linkedin.com/company/irsdlprojects" 
                label="LinkedIn"
              />
              <SocialIcon 
                icon={Instagram} 
                href="https://instagram.com/irsdlprojects" 
                label="Instagram"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IRSDL Projects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{
  icon: React.ElementType;
  href: string;
  label: string;
}> = ({ 
  icon: Icon, 
  href,
  label 
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export default Footer;