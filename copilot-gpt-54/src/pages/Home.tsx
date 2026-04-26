import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import ProjectCard from '../components/ProjectCard';
import SectionWrapper from '../components/SectionWrapper';
import { homePageCopy } from '../data/page-copy';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { siteMeta } from '../data/site';

function Home() {
  const featuredProjects = projects.slice(0, 2);
  const primaryCta = profile.ctas[0];
  const secondaryCta = profile.ctas[1];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-8 sm:gap-24 sm:px-8 lg:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
        <div className="animate-rise">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">{homePageCopy.heroEyebrow}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.4rem,11vw,6.8rem)] font-semibold tracking-[-0.07em] text-text">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-3xl text-xl text-text/90 sm:text-2xl">{profile.title}</p>
          <p className="mt-8 max-w-measure text-lg leading-8 text-muted">{profile.tagline}.</p>
          <p className="mt-4 max-w-measure text-base leading-8 text-muted">{profile.shortBio}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to={primaryCta.path} variant={primaryCta.variant}>
              {primaryCta.label}
            </Button>
            <Button to={secondaryCta.path} variant={secondaryCta.variant}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <Card className="animate-rise [animation-delay:120ms]">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Current posture</p>
          <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text">{siteMeta.availability}</p>
          <p className="mt-6 text-sm leading-7 text-muted">{homePageCopy.heroNote}</p>
          <div className="mt-8 grid gap-4 border-t border-line pt-6 text-sm text-muted sm:grid-cols-2">
            <div>
              <p className="uppercase tracking-[0.18em] text-text">Focus</p>
              <p className="mt-2 leading-7">Platform architecture, backend delivery, and system integration.</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.18em] text-text">Bias</p>
              <p className="mt-2 leading-7">Stable interfaces, observability, maintainable implementation paths.</p>
            </div>
          </div>
        </Card>
      </section>

      <SectionWrapper
        eyebrow={homePageCopy.strengths.eyebrow}
        intro={homePageCopy.strengths.intro}
        title={homePageCopy.strengths.title}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1.15fr,0.85fr,0.95fr]">
          {profile.homeHighlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className={[
                'rounded-[2rem] border border-line bg-surface p-6 transition duration-300 ease-out hover:border-accent/60 hover:bg-surface-strong sm:p-8',
                index === 0 ? 'xl:row-span-2' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-text">{highlight.title}</h2>
              <p className="mt-4 max-w-[30ch] text-base leading-8 text-muted">{highlight.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow={homePageCopy.featuredProjects.eyebrow}
        intro={homePageCopy.featuredProjects.intro}
        title={homePageCopy.featuredProjects.title}
      >
        <div className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <div key={project.slug} className={index === 0 ? 'animate-rise [animation-delay:80ms]' : 'animate-rise [animation-delay:160ms]'}>
              <ProjectCard featured={index === 0} project={project} />
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="grid gap-6 lg:grid-cols-[1fr,0.95fr]">
        <SectionWrapper
          className="rounded-[2rem] border border-line bg-surface p-6 sm:p-8"
          eyebrow={homePageCopy.approach.eyebrow}
          intro={homePageCopy.approach.intro}
          title={homePageCopy.approach.title}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {profile.philosophy.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] bg-canvas px-5 py-5">
                <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <Card className="flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent">Next step</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-text">
              {homePageCopy.contactPrompt.title}
            </h2>
            <p className="mt-4 max-w-measure text-base leading-8 text-muted">{homePageCopy.contactPrompt.body}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/contact">{homePageCopy.contactPrompt.primaryLabel}</Button>
            <Button to="/experience" variant="ghost">
              <span className="inline-flex items-center gap-2">
                {homePageCopy.contactPrompt.secondaryLabel}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default Home;
