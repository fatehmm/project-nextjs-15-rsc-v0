import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { env } from '../../env';
import { siteConfig } from '../config/site';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    openGraph: {
        title: 'Next.js 15 RSC Version 0',
        description: 'The Next.ts 15 Best Practice Boilerplate Code Starter',
        url: 'https://project-nextjs-15-rsc-v0.vercel.app/',
        siteName: 'Next.js 15 RSC Version 0',
        images: [
            {
                url: `${env.BASE_URL}/api/og?title=Next.js 15 RSC Version 0`,
                width: 800,
                height: 600,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
