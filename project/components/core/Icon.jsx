import React from 'react';

/**
 * Icon — gradient duotone "glassy" icon set.
 * A deep brand-blue base shape with a translucent mint→cyan "glass"
 * shape overlaid; where they overlap the colour blends to teal,
 * giving the frosted-glass look. All icons share a 48×48 grid.
 *
 * Names: target · chat · globe · timer · clock · calendar · monitor · users · arrow
 */
export function Icon({ name = 'target', size = 32, style = {}, ...rest }) {
  const uid = React.useId().replace(/[:]/g, '');
  const deep = `d${uid}`;
  const glass = `g${uid}`;
  const S = { strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' };
  const gfill = { fill: `url(#${glass})`, fillOpacity: 0.9 };
  const dfill = { fill: `url(#${deep})` };

  const shapes = {
    target: (
      <>
        <circle cx="24" cy="24" r="17" stroke={`url(#${deep})`} strokeWidth="5" {...S} />
        <circle cx="24" cy="24" r="8.5" {...gfill} />
      </>
    ),
    chat: (
      <>
        <rect x="17" y="6" width="25" height="19" rx="7" {...gfill} />
        <path d="M6 16a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-6l-7 6v-6h-1a4 4 0 0 1-4-4z" {...dfill} />
      </>
    ),
    globe: (
      <>
        <circle cx="24" cy="24" r="17" {...gfill} />
        <ellipse cx="24" cy="24" rx="7.5" ry="17" stroke={`url(#${deep})`} strokeWidth="3" {...S} />
        <path d="M8 24h32M10 16h28M10 32h28" stroke={`url(#${deep})`} strokeWidth="3" {...S} />
      </>
    ),
    timer: (
      <>
        <circle cx="24" cy="27" r="15" {...gfill} />
        <rect x="20" y="5" width="8" height="5" rx="2" {...dfill} />
        <path d="M24 10v3" stroke={`url(#${deep})`} strokeWidth="3" {...S} />
        <path d="M24 27V18M24 27h7" stroke={`url(#${deep})`} strokeWidth="3.4" {...S} />
      </>
    ),
    clock: (
      <>
        <circle cx="24" cy="24" r="17" {...gfill} />
        <path d="M24 24V14M24 24l7 4" stroke={`url(#${deep})`} strokeWidth="3.4" {...S} />
      </>
    ),
    calendar: (
      <>
        <rect x="7" y="11" width="34" height="30" rx="6" {...gfill} />
        <path d="M7 17a6 6 0 0 1 6-6h22a6 6 0 0 1 6 6v3H7z" {...dfill} />
        <rect x="14" y="6" width="4.5" height="9" rx="2.25" {...dfill} />
        <rect x="29.5" y="6" width="4.5" height="9" rx="2.25" {...dfill} />
        <rect x="14" y="26" width="9" height="9" rx="2.5" {...dfill} />
      </>
    ),
    monitor: (
      <>
        <rect x="6" y="8" width="36" height="25" rx="5" {...dfill} />
        <rect x="11" y="13" width="20" height="13" rx="2.5" {...gfill} />
        <path d="M24 33v6M16 41h16" stroke={`url(#${deep})`} strokeWidth="4" {...S} />
      </>
    ),
    users: (
      <>
        <circle cx="31" cy="17" r="6.5" {...gfill} />
        <path d="M21 41a10 10 0 0 1 20 0z" {...gfill} />
        <circle cx="18" cy="18" r="7.5" {...dfill} />
        <path d="M6 42a12 12 0 0 1 24 0z" {...dfill} />
      </>
    ),
    arrow: (
      <>
        <rect x="6" y="19.5" width="23" height="9" rx="4.5" {...dfill} />
        <path d="M25 10 L42 24 L25 38 Z" {...gfill} />
      </>
    ),
  };

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', ...style }} {...rest}>
      <defs>
        <linearGradient id={deep} x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--blue-500)" />
          <stop offset="1" stopColor="var(--blue-700)" />
        </linearGradient>
        <linearGradient id={glass} x1="10" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6EE7C7" />
          <stop offset="1" stopColor="#28C2F2" />
        </linearGradient>
      </defs>
      {shapes[name] || shapes.target}
    </svg>
  );
}
