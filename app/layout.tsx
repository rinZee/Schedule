import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Schedule",
  description:
    "a site where you can track your goals in a calender and make your  calender public so that it keeps you more accountable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>div.{children}</body>
    </html>
  );
}
