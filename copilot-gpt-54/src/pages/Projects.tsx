import ProjectCard from '../components/ProjectCard';
import SectionWrapper from '../components/SectionWrapper';
import { projectsPageCopy } from '../data/page-copy';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:gap-16 sm:px-8 lg:px-10">
      <SectionWrapper
        eyebrow={projectsPageCopy.hero.eyebrow}
        intro={projectsPageCopy.hero.intro}
        title={projectsPageCopy.hero.title}
      >
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard featured={index === 0} key={project.slug} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Projects;
