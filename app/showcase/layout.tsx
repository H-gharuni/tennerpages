import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Showcase - Portfolio of Websites We\'ve Built | Tenner Pages',
  description: 'Browse our portfolio of professional websites. See real examples of our work and get inspired for your own website project. Showcase incentive program included.',
  keywords: 'website portfolio, web design examples, professional websites, website showcase',
};

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
