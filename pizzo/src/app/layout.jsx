import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Navbar/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
