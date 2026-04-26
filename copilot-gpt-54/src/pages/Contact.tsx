import { FormEvent, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { contactLinks } from '../data/contact';
import { contactPageCopy } from '../data/page-copy';

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!name.trim()) {
      nextErrors.name = contactPageCopy.form.validation.name;
    }

    if (!email.trim() || !email.includes('@')) {
      nextErrors.email = contactPageCopy.form.validation.email;
    }

    if (!message.trim()) {
      nextErrors.message = contactPageCopy.form.validation.message;
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-8 sm:gap-16 sm:px-8 lg:px-10">
      <SectionWrapper
        eyebrow={contactPageCopy.hero.eyebrow}
        intro={contactPageCopy.hero.intro}
        title={contactPageCopy.hero.title}
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr,1.18fr]">
          <Card>
            <p className="text-xs uppercase tracking-[0.24em] text-accent">{contactPageCopy.methodsTitle}</p>
            <ul className="mt-6 space-y-6">
              {contactLinks.map((link) => (
                <li key={link.label} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">{link.label}</p>
                  <a className="mt-3 block text-base text-text transition hover:text-accent" href={link.href} rel="noreferrer" target="_blank">
                    {link.value}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-text">
              {contactPageCopy.form.title}
            </h2>
            <p className="mt-4 max-w-measure text-base leading-8 text-muted">{contactPageCopy.form.intro}</p>

            <form className="mt-8 grid gap-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-text" htmlFor="name">
                  {contactPageCopy.form.fields.name}
                </label>
                <input
                  className="min-h-12 w-full rounded-[1.25rem] border border-line bg-canvas px-4 text-text outline-none transition placeholder:text-muted/70 focus:border-accent"
                  id="name"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  type="text"
                  value={name}
                />
                {errors.name ? <p className="mt-2 text-sm text-[#f3a6a6]">{errors.name}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text" htmlFor="email">
                  {contactPageCopy.form.fields.email}
                </label>
                <input
                  className="min-h-12 w-full rounded-[1.25rem] border border-line bg-canvas px-4 text-text outline-none transition placeholder:text-muted/70 focus:border-accent"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                />
                {errors.email ? <p className="mt-2 text-sm text-[#f3a6a6]">{errors.email}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-text" htmlFor="message">
                  {contactPageCopy.form.fields.message}
                </label>
                <textarea
                  className="min-h-[11rem] w-full rounded-[1.25rem] border border-line bg-canvas px-4 py-3 text-text outline-none transition placeholder:text-muted/70 focus:border-accent"
                  id="message"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="A few lines about the system, team, or delivery problem."
                  value={message}
                />
                {errors.message ? <p className="mt-2 text-sm text-[#f3a6a6]">{errors.message}</p> : null}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button type="submit">{contactPageCopy.form.submitLabel}</Button>
                <Button href="mailto:lars@example.com" variant="ghost">
                  Send by email instead
                </Button>
              </div>

              {isSubmitted ? (
                <div className="rounded-[1.5rem] border border-line bg-canvas px-5 py-4">
                  <p className="text-sm font-medium text-text">{contactPageCopy.form.successTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{contactPageCopy.form.successBody}</p>
                </div>
              ) : null}
            </form>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default Contact;
