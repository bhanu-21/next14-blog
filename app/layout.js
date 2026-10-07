import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Chatbot from "@/components/chatbot";
import Providers from "@/components/providers";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: { template: "%s | Bhanupriya", default: "Bhanupriya" }
};

export default async function RootLayout({ children }) {
  const theme = await useServerDarkMode();

  return (
    <html lang="en" className={theme}>
      <body className={roboto.className}>
        <Providers>
          <Header />

          <main className="mt-12">
            {children}
          </main>

          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
