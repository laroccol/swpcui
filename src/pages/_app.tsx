import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import SideBar from "components/navigation/SideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SideBar>
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  );
}

export default MyApp;
