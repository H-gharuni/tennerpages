import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Website Started Today | Tenner Pages',
  description: 'Get in touch to start your website project. We respond within hours and can have your professional site live in just 48 hours. Email: info@tennerpages.com',
  keywords: 'contact web designer, get website quote, start website project, web design inquiry',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
