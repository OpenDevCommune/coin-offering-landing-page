import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import './styles/reset.scss';
import './styles/global.scss';
import Header from "@/widgets/Header/Header";
import Slider from "@/widgets/Slider/Slider";
import Footer from "@/widgets/Footer/Footer";
import Providers from "@/app/providers/Providers";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})


export const metadata: Metadata = {
  title: "Coin offering seed round",
  description: "Coin offering seed round",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Providers>
          <Header/>
          <Slider/>
          {children}
          <Footer/>
      </Providers>
      </body>
    </html>
  );
}