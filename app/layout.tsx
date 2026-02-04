import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Repair Hub - Pure Electric Scooter Repairs",
  description: "Professional repair guides and knowledge base for Pure Electric scooters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
