import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { aboutPageCopy } from '../data/page-copy';
import { profile } from '../data/profile';

function About() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 sm:gap-20 sm:px-8 lg:px-10">
      <SectionWrapper
        eyebrow={aboutPageCopy.hero.eyebrow}
        intro={aboutPageCopy.hero.intro}
        title={aboutPageCopy.hero.title}
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Card>
            <div className="space-y-5 text-base leading-8 text-muted">
              {profile.longBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
          <Card className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Professional posture</p>
              <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text">
                Clear systems, sane tradeoffs, and solutions that stay maintainable after the first release.
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <p className="text-sm leading-7 text-muted">
                I am most comfortable in environments where legacy constraints, cloud services, and delivery pressure all exist at the same time.
              </p>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow={aboutPageCopy.philosophy.eyebrow}
        intro={aboutPageCopy.philosophy.intro}
        title={aboutPageCopy.philosophy.title}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {profile.philosophy.map((item) => (
            <Card key={item.title} className="h-full">
              <p className="text-xs uppercase tracking-[0.24em] text-accent">Principle</p>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text">{item.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

export default About;
