import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { appWithTranslation } from "next-i18next";
import "@/shared/styles/globals.css";
import nextI18NextConfig from "../../next-i18next.config";

const saans = localFont({
  src: [
    {
      path: "../shared/fonts/saans/Saans-TRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../shared/fonts/saans/Saans-TRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../shared/fonts/saans/Saans-TRIAL-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../shared/fonts/saans/Saans-TRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../shared/fonts/saans/Saans-TRIAL-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-saans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`${jetbrainsMono.variable} ${saans.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
