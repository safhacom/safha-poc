import AppHead from "@/components/Head";
import "@/styles/globals.css";
import "@/styles/ContactUs.css";
import "@/styles/Footerwithlinks.css";
import "@/styles/Gallery.css";
import "@/styles/Location.css";
import "@/styles/Reservation.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}
