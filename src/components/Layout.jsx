/* eslint-disable react/prop-types */
import { Box, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
const Layout = ({ children }) => {
  return (
    <Flex height={"100vw"} maxHeight={"100vh"} overflowY={"hidden"}>
      <Box flexBasis={"20%"} height={"100vh"}>
        <SideNav />
      </Box>
      <Box flexBasis={"80%"} overflowY={"scroll"}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
