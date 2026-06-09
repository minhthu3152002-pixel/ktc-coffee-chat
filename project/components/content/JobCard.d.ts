import * as React from 'react';

export interface JobTag { label: string; tone?: 'blue' | 'pink' | 'cyan' | 'green' | 'amber' | 'gray'; }
export interface JobInfoRow { label: string; value: React.ReactNode; highlight?: boolean; }

/**
 * Recruitment JD card for an onsite-Korea position.
 * @startingPoint section="Content" subtitle="Full job description card with tags, info, benefits & apply CTA" viewport="700x620"
 */
export interface JobCardProps {
  /** Job code, e.g. "FPT401" */
  id: string;
  title: React.ReactNode;
  /** Level + location line, e.g. "Fresher / Junior · Onsite Korea" */
  level: React.ReactNode;
  /** Tech / status pills */
  tags?: (JobTag | string)[];
  /** Salary / housing / visa rows; set highlight to color the salary green */
  info?: JobInfoRow[];
  requirements?: React.ReactNode[];
  benefits?: React.ReactNode[];
  /** @default "Xem chi tiết & Apply" */
  ctaLabel?: string;
  href?: string;
  style?: React.CSSProperties;
}
export function JobCard(props: JobCardProps): JSX.Element;
