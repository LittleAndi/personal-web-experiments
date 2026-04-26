import { contactLinks } from '../data/contact';
import { profile } from '../data/profile';
import { siteMeta } from '../data/site';

function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">{siteMeta.footerLocation}</p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-text">{profile.name}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{siteMeta.footerNote}</p>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:justify-end sm:gap-6">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a className="transition hover:text-text" href={link.href} rel="noreferrer" target="_blank">
                {link.label}: {link.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
