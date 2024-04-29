import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

// Metadata
export const metadata = {
  title: "Mi tienda en Nextjs - HomePage",
  description: "Esta es la página de inicio de mi tienda en Nextjs",
  keywords: "Nextjs, Tienda, E-commerce",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
