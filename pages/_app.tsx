import Layout from "../components/layout/layout";
import theme from "../components/theme";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/styles.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
