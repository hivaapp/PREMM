import { motion } from 'framer-motion';
import { ExternalLink, Smartphone } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="card flex flex-col h-full hover:border-[var(--color-brand)] transition-all duration-300 relative group"
    >
      {/* Thumbnail placeholder */}
      <div className="w-full h-48 bg-[var(--color-surface-alt)] rounded-md mb-4 flex items-center justify-center overflow-hidden relative">
        <span className="text-3xl font-bold text-[var(--color-text-light)] opacity-50">
          {project.name.substring(0, 2).toUpperCase()}
        </span>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--color-surface)]/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary font-semibold"
          >
            View Project &rarr;
          </a>
        </div>
      </div>

      <div className="flex justify-between items-start mb-2">
        <span className="badge bg-[var(--color-surface-alt)] text-[var(--color-text-mid)]">
          {project.type}
        </span>
        {project.metrics && (
          <span className="badge badge-success whitespace-nowrap">
            {project.metrics}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
        {project.name}
      </h3>
      
      <p className="text-[var(--color-text-mid)] text-sm mb-6 flex-grow">
        {project.description}
      </p>

      {/* App Store / Play Store links if present */}
      {(project.playStore || project.appStore) && (
        <div className="flex gap-2 mt-auto pt-4 border-t border-[var(--color-border)]">
          {project.playStore && (
            <a 
              href={project.playStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-[var(--color-surface-alt)] rounded-md hover:text-[var(--color-brand)] transition-colors"
              title="Play Store"
            >
              <Smartphone size={18} />
            </a>
          )}
          {project.appStore && (
            <a 
              href={project.appStore} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-[var(--color-surface-alt)] rounded-md hover:text-[var(--color-brand)] transition-colors"
              title="App Store"
            >
              <Smartphone size={18} />
            </a>
          )}
        </div>
      )}
      
      {/* Default live link if no app stores are provided but link exists */}
      {!project.playStore && !project.appStore && project.link && (
        <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-text-mid)] hover:text-[var(--color-brand)] transition-colors"
          >
            Live Link <ExternalLink size={14} />
          </a>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-[var(--color-border)]">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Our Work Speaks</h2>
          <p className="text-[var(--color-text-mid)] max-w-2xl">
            Real products. Real users. Real impact.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
