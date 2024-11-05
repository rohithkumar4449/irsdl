import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectService } from '../services/api';
import { Loader2 } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
}

const ProjectList = () => {
  const { category } = useParams<{ category: string }>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await projectService.getProjects(category || '');
        setProjects(response.data);
      } catch (err) {
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [category]);

  const getCategoryTitle = () => {
    switch (category) {
      case 'btech':
        return 'B.Tech Projects';
      case 'mtech':
        return 'M.Tech Projects';
      case 'mca':
        return 'MCA Projects';
      case 'degree':
        return 'Degree Projects';
      default:
        return 'Projects';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">{getCategoryTitle()}</h1>
      
      {projects.length === 0 ? (
        <p className="text-gray-600 text-center py-8">No projects available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;