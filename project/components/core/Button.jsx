import React from 'react';

/**
 * Button — primary action element for the KTC × FPT Coffee Chat brand.
 * Royal-blue fill is the default; navy, outline and ghost variants cover
 * the rest. Hover lifts 1px with a blue glow on solid variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  arrow = false,
  disabled = false,
  full = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '9px 18px', fontSize: '13px' },
    md: { padding: '11px 24px', fontSize: '14px' },
    lg: { padding: '14px 30px', fontSize: '15px' },
  };

  const variants = {
    primary: { background: 'var(--color-primary)', color: 'var(--white)', border: '1px solid transparent' },
    navy:    { background: 'var(--navy-800)', color: 'var(--white)', border: '1px solid transparent' },
    accent:  { background: 'var(--color-accent)', color: 'var(--white)', border: '1px solid transparent' },
    outline: { background: 'var(--white)', color: 'var(--color-primary)', border: '1px solid var(--color-border-strong)' },
    ghost:   { background: 'var(--blue-100)', color: 'var(--color-primary)', border: '1px solid var(--blue-200)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    letterSpacing: 'var(--ls-wide)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: full ? '100%' : 'auto',
    textDecoration: 'none',
    transition: 'all var(--dur-fast) var(--ease)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const solid = variant === 'primary' || variant === 'navy' || variant === 'accent';

  const handleEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-hover)';
    if (variant === 'navy') e.currentTarget.style.background = 'var(--navy-700)';
    if (variant === 'accent') e.currentTarget.style.background = 'var(--pink-500)';
    if (variant === 'outline') e.currentTarget.style.background = 'var(--blue-50)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--blue-200)';
    if (solid) {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-cta)';
    }
  };
  const handleLeave = (e) => {
    if (disabled) return;
    e.currentTarget.style.background = variants[variant].background;
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = 'none';
  };

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={base}
      disabled={!href ? disabled : undefined}
      {...rest}
    >
      {content}
    </Tag>
  );
}
