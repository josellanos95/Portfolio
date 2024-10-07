import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jose Llanos | Personal Portfolio",
  description: "Jose is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-blue-50 dark:text-opacity-90 transition-colors duration-300`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ff3366] dark:animate-pulse"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4d4dff] dark:animate-pulse"></div>

        <div className="absolute inset-0 -z-10 h-full w-full">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
            style={{
              mask: 'linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)',
              WebkitMask: 'linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-50 to-transparent opacity-0 dark:via-gray-950 dark:opacity-30"></div>
          </div>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="flex flex-col items-center px-4">
              {children}
            </main>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}