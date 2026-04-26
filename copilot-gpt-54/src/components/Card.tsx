import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <article
      className={[
        'rounded-[2rem] border border-line bg-surface/90 p-6 shadow-panel transition duration-300 ease-out sm:p-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </article>
  );
}

export default Card;
