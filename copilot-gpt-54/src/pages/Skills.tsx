import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import SkillBadge from '../components/SkillBadge';
import { skillsPageCopy } from '../data/page-copy';
import { skillGroups } from '../data/skills';

function Skills() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:gap-16 sm:px-8 lg:px-10">
      <SectionWrapper
        eyebrow={skillsPageCopy.hero.eyebrow}
        intro={skillsPageCopy.hero.intro}
        title={skillsPageCopy.hero.title}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="h-full">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">{group.title}</p>
              <p className="mt-4 max-w-measure text-base leading-8 text-muted">{group.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Skills;
