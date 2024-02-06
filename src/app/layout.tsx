import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

export const metadata: Metadata = {
  title: "barook",
  description: "barook-frontend-assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* note: I know this is the main layout and modifying it is fround upon
      but at this example , I thing it is logical and fast! */}
      <body
        className="flex align-middle justify-center items-center
      bg-primaryBg 
      "
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
