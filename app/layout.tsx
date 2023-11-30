import { Metadata } from "next";
import React from "react";
import "@/app/globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/toast/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Abana Projects",
  description: "Strength in partnerships",
  keywords: ["abana", "apc", "abana projects", "abana website"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@1,500,700,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <Script id="show-chatbot">
        {`  var Tawk_API = Tawk_API || {},
         Tawk_LoadStart = new Date();
      (function() {
         var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
         s1.async = true;
         s1.src = 'https://embed.tawk.to/6555b8afcec6a91282105473/1hfbdishs';
         s1.charset = 'UTF-8';
         s1.setAttribute('crossorigin', '*');
         s0.parentNode.insertBefore(s1, s0);
      })();`}
      </Script>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body className="min-h-screen bg-background font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
