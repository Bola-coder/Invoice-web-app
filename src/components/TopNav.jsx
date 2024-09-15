/* eslint-disable react/prop-types */
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const TopNav = ({ title }) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      shadow="lg"
      position="sticky"
      bg={"primary.500"}
      top="0"
      zIndex={"1000"}
      color="#FFF"
      fontFamily={"IBM Plex Sans"}
      height={"8vh"}
      maxHeight={"8vh"}
    >
      <Box paddingX={"2%"}>
        <Text fontSize="2xl" fontWeight="bold">
          {title}
        </Text>
      </Box>

      <Box cursor={"pointer"}>
        <Avatar src="" size="md" name="User Avatar" colorScheme="primary" />
      </Box>
    </Flex>
  );
};

export default TopNav;
