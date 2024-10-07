import "./globals.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ClientThemeProvider from "./ClientThemeProvider";
import { MyClerkProvider } from "./MyClerkProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const messages = await getMessages();
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <ClientThemeProvider>
            <MyClerkProvider>
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col h-screen">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </MyClerkProvider>
          </ClientThemeProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
