import type { ExperienceEntry } from '../types';
import Card from './Card';
import SkillBadge from './SkillBadge';

type TimelineItemProps = {
  entry: ExperienceEntry;
};

function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <Card className="grid gap-6 lg:grid-cols-[12rem,1fr] lg:items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-accent">{entry.period}</p>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text">{entry.role}</h3>
        <p className="mt-2 text-sm text-muted">{entry.company}</p>
      </div>
      <div>
        <p className="max-w-measure text-base leading-8 text-muted">{entry.summary}</p>
        <ul className="mt-6 space-y-3 text-sm leading-7 text-text/88">
          {entry.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          {entry.technologies.map((technology) => (
            <SkillBadge key={technology} skill={technology} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export default TimelineItem;
