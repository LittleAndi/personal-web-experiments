import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type RouterLinkProps = CommonProps & {
  to: string;
  href?: never;
} & Omit<ComponentProps<typeof Link>, 'to' | 'className' | 'children'>;

type ExternalLinkProps = CommonProps & {
  href: string;
  to?: never;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

type NativeButtonProps = CommonProps & {
  href?: never;
  to?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = RouterLinkProps | ExternalLinkProps | NativeButtonProps;

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-text text-canvas shadow-panel hover:bg-accent hover:text-canvas focus-visible:outline-accent',
    secondary:
      'border border-line bg-surface text-text hover:border-accent hover:bg-accent-soft hover:text-text focus-visible:outline-accent',
    ghost:
      'text-text hover:bg-surface-strong focus-visible:outline-accent',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    md: 'min-h-11 px-5 py-3 text-sm tracking-[0.08em]',
    sm: 'min-h-10 px-4 py-2.5 text-xs tracking-[0.12em]',
  };

  return [
    'inline-flex items-center justify-center rounded-full font-medium uppercase transition duration-200 ease-out focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const className = getButtonClasses(variant, size, props.className);

  if ('to' in props && props.to) {
    const { children, to, variant: _variant, size: _size, className: _className, ...rest } = props;

    return (
      <Link className={className} to={to} {...rest}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const {
      children,
      href,
      external = true,
      variant: _variant,
      size: _size,
      className: _className,
      ...rest
    } = props;

    return (
      <a
        className={className}
        href={href}
        rel={external ? 'noreferrer' : rest.rel}
        target={external ? '_blank' : rest.target}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const nativeButtonProps = props as NativeButtonProps;
  const {
    children,
    variant: _variant,
    size: _size,
    className: _className,
    type = 'button',
    ...rest
  } = nativeButtonProps;

  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
