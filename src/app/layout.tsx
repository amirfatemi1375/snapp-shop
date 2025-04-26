import Layout from "@/components/layout/Layout";
import { Metadata } from "next";
import "@/styles/globals.scss";
export const metadata: Metadata = {
  title: "SnappShop",
  description: "فروشگاه آنلاین با Next.js و Zustand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
