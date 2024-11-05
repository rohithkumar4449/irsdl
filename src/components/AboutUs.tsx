import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          About IRSDL Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <StatCard
            icon={Users}
            title="75+"
            description="Students Guided"
          />
          <StatCard
            icon={Award}
            title="100%"
            description="Project Success Rate"
          />
          <StatCard
            icon={Briefcase}
            title="50+"
            description="Projects Completed"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            IRSDL Projects is a leading provider of final-year project services, dedicated to helping students transform their innovative ideas into reality. Our team of expert mentors and industry professionals guide students through every phase of their project development, ensuring high-quality outcomes that meet academic standards and industry requirements.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To empower students with practical knowledge and hands-on experience in cutting-edge technologies, preparing them for successful careers in the IT industry.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted partner for academic projects, fostering innovation and excellence in technical education across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon: Icon, 
  title, 
  description 
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-blue-600" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default AboutUs;