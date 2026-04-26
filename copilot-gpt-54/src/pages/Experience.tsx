import SectionWrapper from '../components/SectionWrapper';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/experience';
import { experiencePageCopy } from '../data/page-copy';

function Experience() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 sm:gap-12 sm:px-8 lg:px-10">
      <SectionWrapper
        eyebrow={experiencePageCopy.hero.eyebrow}
        intro={experiencePageCopy.hero.intro}
        title={experiencePageCopy.hero.title}
      >
        <div className="grid gap-6">
          {experience.map((entry) => (
            <TimelineItem entry={entry} key={`${entry.period}-${entry.role}`} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Experience;
