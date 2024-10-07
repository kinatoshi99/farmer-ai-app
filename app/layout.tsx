"use client";

import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { createContext, useState, useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

function ClerkComponent({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ClerkLoading>
        <div className="flex items-center justify-center h-screen text-2xl">
          LOADING...
        </div>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode from local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString()); // Convert boolean to string
  };

  const messages = await getMessages();
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <html lang={locale} className={isDarkMode ? "dark" : ""}>
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <ClerkComponent>
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col h-screen">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ClerkComponent>
          </NextIntlClientProvider>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
