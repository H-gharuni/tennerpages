import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '£10 Trial Offer - See Your Website Vision Risk-Free | Tenner Pages',
  description: 'Try our service for just £10. Get a website mockup to visualize your project. If you proceed, the £10 is credited to your first payment. Zero risk, maximum value.',
  keywords: 'website trial, cheap website mockup, risk-free web design, £10 website trial uk',
};

export default function TrialOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
