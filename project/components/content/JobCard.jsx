import React from 'react';
import { Badge } from '../core/Badge.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * JobCard — recruitment JD card for an onsite Korea position.
 * Header (id, title, level) → tags → key info rows → requirements →
 * highlighted benefits box → apply CTA pinned to the bottom.
 */
export function JobCard({
  id,
  title,
  level,
  tags = [],
  info = [],
  requirements = [],
  benefits = [],
  ctaLabel = 'Xem chi tiết & Apply',
  href = '#',
  style = {},
}) {
  const handleEnter = (e) => {
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    e.currentTarget.style.borderColor = 'var(--blue-200)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'var(--color-border)';
    e.currentTarget.style.transform = 'none';
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--white)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-7)',
        transition: 'all var(--dur-normal) var(--ease)',
        ...style,
      }}
    >
      <div style={{ fontSize: 'var(--fs-3xs)', fontWeight: 'var(--fw-bold)', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>{id}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-extrabold)', color: 'var(--text-heading)', lineHeight: 'var(--lh-snug)', marginBottom: '6px' }}>{title}</div>
      <div style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-primary)', fontWeight: 'var(--fw-semibold)', marginBottom: '16px' }}>{level}</div>

      {tags.length > 0 && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
          {tags.map((t, i) => <Badge key={i} tone={t.tone || 'blue'}>{t.label || t}</Badge>)}
        </div>
      )}

      {info.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {info.map((row, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--fs-sm)' }}>
              <span style={{ fontSize: 'var(--fs-2xs)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-muted)', width: '90px', flexShrink: 0 }}>{row.label}</span>
              <span style={{ fontWeight: row.highlight ? 'var(--fw-bold)' : 'var(--fw-semibold)', color: row.highlight ? 'var(--color-success)' : 'var(--ink-800)' }}>{row.value}</span>
            </div>
          ))}
        </div>
      )}

      {requirements.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: 'var(--fs-2xs)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>Yêu cầu chính</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', margin: 0, padding: 0 }}>
            {requirements.map((r, i) => (
              <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--fs-xs)', color: 'var(--text-body)', lineHeight: 'var(--lh-normal)' }}>
                <Icon name="arrow" size={15} style={{ marginTop: '2px', flexShrink: 0 }} />{r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {benefits.length > 0 && (
        <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', marginBottom: '20px' }}>
          <div style={{ fontSize: 'var(--fs-3xs)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Quyền lợi nổi bật</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', margin: 0, padding: 0 }}>
            {benefits.map((b, i) => (
              <li key={i} style={{ display: 'flex', gap: '8px', fontSize: 'var(--fs-xs)', color: 'var(--text-body)' }}>
                <span style={{ color: 'var(--color-success)', fontWeight: 'var(--fw-bold)', flexShrink: 0 }}>✓</span>{b}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button variant="primary" href={href} arrow full style={{ marginTop: 'auto' }}>{ctaLabel}</Button>
    </div>
  );
}
