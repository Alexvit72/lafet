// pages/_app.tsx
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import "../app/globals.css"; // общий стиль

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
