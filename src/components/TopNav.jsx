/* eslint-disable react/prop-types */
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";

const TopNav = ({ title, handleIsMobile }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      shadow="lg"
      position="sticky"
      bg={"#FFF"}
      top="0"
      zIndex={"1000"}
      color="#000"
      fontFamily={"IBM Plex Sans"}
      height={"10vh"}
      maxHeight={"10vh"}
    >
      <Flex flexBasis={"50%"} alignItems={"center"}>
        <Box
          display={{ base: "block", lg: "none" }}
          mr={{ base: "10px", lg: "none" }}
        >
          <HiMenu
            size={30}
            style={{ marginLeft: "10px" }}
            cursor={"pointer"}
            onClick={handleIsMobile}
          />
        </Box>
        <Box paddingX={"2%"}>
          <Text fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Flex>

      <Box cursor={"pointer"} mr={"20px"}>
        <Avatar src="" size="md" name="User Avatar" colorScheme="primary" />
      </Box>
    </Flex>
  );
};

export default TopNav;
