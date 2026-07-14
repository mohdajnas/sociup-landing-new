import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const myriadPro = localFont({
  src: [
    {
      path: '../../public/myriad-pro/MyriadPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/myriad-pro/MYRIADPRO-REGULAR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/myriad-pro/MYRIADPRO-SEMIBOLD.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/myriad-pro/MYRIADPRO-BOLD.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "SOCIUP | Next-Gen Design Agency",
  description: "Next-Gen Design Agency for Growing Brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myriadPro.variable}>
        {children}
      </body>
    </html>
  );
}
