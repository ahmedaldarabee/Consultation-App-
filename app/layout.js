import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner"

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default: "Appointment Website | Darabee",
    template: "%s | Darabee",
  },
  description: "Book your appointments easily and efficiently with Darabee.",
  keywords: ["appointments", "darabee", "booking", "schedule", "health", "services"],
  authors: [{ name: "Ahmed Nayel Al Darabee", url: "https://www.linkedin.com/in/ahmed-al-darabee/" }],
  creator: "Ahmed Nayel Al Darabee",
  metadataBase: new URL("https://www.linkedin.com/in/ahmed-al-darabee/"),
  openGraph: {
    type: "website",
    url: "https://www.linkedin.com/in/ahmed-al-darabee/",
    title: "Appointment Website | Darabee",
    description: "Book your appointments easily and efficiently with Darabee.",
    siteName: "Darabee",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <div className="md:px-20">
          <Header />
          {children}
          <Toaster position="bottom-right" />
          <Footer />
        </div>
      </body>
    </html>
  );
}
