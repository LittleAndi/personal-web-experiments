import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  className?: string;
};

function SectionWrapper({ id, eyebrow, title, intro, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={['flex flex-col gap-8 sm:gap-10', className].filter(Boolean).join(' ')}>
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-text sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-measure text-base leading-8 text-muted sm:text-lg">{intro}</p>
      </header>
      {children}
    </section>
  );
}

export default SectionWrapper;
