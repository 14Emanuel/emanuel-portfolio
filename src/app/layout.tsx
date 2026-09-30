import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emanuel Okoth | AI Software Engineer & Agentic Systems Architect",
  description:
    "Portfolio of Emanuel Okoth (@14Emanuel). Specializing in AI Software Engineering, Autonomous Multi-Agent Pipelines, Cognitive Loops, and Systems Engineering in Go.",
  keywords: [
    "AI Software Engineer",
    "Agentic Software",
    "Autonomous Agents",
    "Emanuel Okoth",
    "Zone01 Kisumu",
    "Yaya AI",
    "Golang",
    "Next.js",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪷</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className="bg-white text-slate-800 antialiased min-h-screen selection:bg-teal-100 selection:text-teal-900 font-sans">
        {children}
      </body>
    </html>
  );
}
