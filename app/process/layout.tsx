import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process - How We Build Your Website in 48 Hours | Tenner Pages',
  description: 'Learn about our simple 4-step process to get your professional website live in just 2 days. From consultation to launch, we make it easy and fast.',
  keywords: 'website development process, fast website launch, 48 hour website, quick web design',
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
