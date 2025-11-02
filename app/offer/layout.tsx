import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Offer - Simple £10/Page/Month Pricing | Tenner Pages',
  description: 'Transparent pricing with no hidden fees. Professional websites for just £10 per page per month. Includes hosting, SSL, backups, and support. No minimum contract required.',
  keywords: 'pay monthly website pricing, affordable web design uk, monthly website costs, startup website pricing',
};

export default function OfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
