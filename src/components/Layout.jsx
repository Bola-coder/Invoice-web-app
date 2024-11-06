/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
const Layout = ({ children, title }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleIsMobile = () => setIsMobile(!isMobile);
  return (
    <Flex height="100vh" overflowY={"hidden"}>
      <Box flexBasis={{ base: "0", lg: "15%" }} height={"100vh"}>
        <SideNav isMobile={isMobile} />
      </Box>
      <Box
        flexBasis={{ base: "100%", lg: "85%" }}
        height="100vh"
        maxHeight={"100vh"}
        overflow="hidden"
      >
        <TopNav
          title={title}
          isMobile={isMobile}
          handleIsMobile={handleIsMobile}
        />
        <Box padding={"2%"} height="90vh" overflowY="auto">
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
