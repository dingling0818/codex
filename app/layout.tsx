import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ling Ding | SSHRC Doctoral Fellow",
  description:
    "Academic portfolio for Ling Ding, SSHRC Doctoral Fellow and Junior Sociology of Technology.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
