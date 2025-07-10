import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ApolloWrapper from "./providers/ApolloProvider";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learning Next js",
  description: "Try To Learn Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />

          <main>
            <ApolloWrapper>{children}</ApolloWrapper>
          </main>

          {/* <footer className="bg-gray-200 text-center">
          <h2>Awesome Next.js Project</h2>
        </footer> */}
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
