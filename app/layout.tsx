import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

// Fallback for Georgian text when a Georgian-capable Helvetica Neue isn't installed.
const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["300", "500", "700"],
  variable: "--font-georgian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "კრედო ბანკი",
  description: "კრედო ბანკი",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Browser extensions (e.g. Grammarly) add attributes to <html>/<body> before hydration;
    // this only silences attribute mismatches on these two tags, not their children.
    <html lang="ka" className={notoGeorgian.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
