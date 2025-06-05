import "./globals.css";
import Header from "@/components/layout/header";

export const metadata = {
  title: "ID Studio - Creative Web Design Agency",
  description:
    "Award-winning web design agency creating exceptional digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mundial">
        <Header />
        {children}
      </body>
    </html>
  );
}
