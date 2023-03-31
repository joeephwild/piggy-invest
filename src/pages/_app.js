import "@/styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider autoSwitch={true} activeChain={"binance-testnet"}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
