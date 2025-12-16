import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "The News Concierge",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Bootstrap JS (needed for navbar toggler) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* FontAwesome kit */}
        <Script
          src="https://kit.fontawesome.com/d95aef9bdc.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
