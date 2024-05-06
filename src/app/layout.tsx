import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GlobalContextProvider } from "./context/store";
import BannerHeader from "./(components)/BannerHeader";
import Footer from "./(components)/footer";
import { ImportantLink } from "./(components)/ImportantLink";
import Whatsapp from "./(components)/Whatsapp";


config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

interface MetadataWithMeta extends Metadata {
  meta?: {
    name: string;
    content: string;
  }[];
}
export const metadata: MetadataWithMeta = {
  title: {
    default: "NAMC",
    template: "%s | NAMC",
  },
  description: "NAMC website",
  // meta: [
  //   {
  //     name: "viewport",
  //     content: "width=1536",
  //   },
  //   // You can add more meta tags if needed
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen overflow-hidden">
          <GlobalContextProvider>
            <BannerHeader />
            {children}
            {/* <Whatsapp/> */}
            <Footer />
          <ImportantLink/>
          </GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* <script
//           //async
//           //src="../../node_modules/flowbite/dist/flowbite.min.js"
//         ></script> */}
//         <div className="w-full min-h-screen overflow-hidden">
//           <GlobalContextProvider>
//             <BannerHeader />
//             {children}
//             <Footer />
//           </GlobalContextProvider>
//         </div>
//       </body>
//     </html>
//   );
// };
