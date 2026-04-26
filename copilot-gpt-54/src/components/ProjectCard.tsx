import type { ProjectEntry } from '../types';
import Card from './Card';
import SkillBadge from './SkillBadge';

type ProjectCardProps = {
  project: ProjectEntry;
  featured?: boolean;
};

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card className={featured ? 'lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:gap-10' : ''}>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-accent">{project.slug.split('-').join(' ')}</p>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text sm:text-[2rem]">
          {project.name}
        </h3>
        <p className="mt-4 max-w-measure text-base leading-8 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <SkillBadge key={item} skill={item} />
          ))}
        </div>
      </div>
      <div className={featured ? 'mt-8 border-t border-line pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0' : 'mt-8 border-t border-line pt-8'}>
        <p className="text-xs uppercase tracking-[0.24em] text-muted">Problem solved</p>
        <p className="mt-3 text-sm leading-7 text-text/88">{project.problem}</p>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-text/88">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-7 text-muted">{project.outcome}</p>
      </div>
    </Card>
  );
}

export default ProjectCard;
