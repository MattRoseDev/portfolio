import type { AppProps } from "next/app";
import "../styles/globals.css";
import { SafeHydrate } from "@/components/SafeHydrate";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
