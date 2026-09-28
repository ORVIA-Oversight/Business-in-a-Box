import './globals.css';

export const metadata = {
  title: 'ORVIA Business in a Box | Your business. Our operating system.',
  description: 'Launch or grow a genuine business with a licensed operating landscape: brand, web, workflow, AI support, growth systems and human-led control.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
