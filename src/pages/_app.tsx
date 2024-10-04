import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactLenis } from "@/lib/lenis";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>
  );
}
