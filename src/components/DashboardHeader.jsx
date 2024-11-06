/* eslint-disable react/prop-types */
import { Flex, Box, Text } from "@chakra-ui/react";

const DashboardHeader = ({ user }) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "left" }}
      padding={{ base: "10px", md: "20px" }}
    >
      <Box mb={{ base: "10px", md: "0" }}>
        {" "}
        {/* Margin bottom on small screens */}
        <Text
          as={"h3"}
          fontSize={{ base: "16px", sm: "20px", md: "24px" }}
          fontWeight={600}
        >
          Hello, {user?.firstname}
        </Text>
        <Text
          as={"p"}
          fontSize={{ base: "12px", sm: "14px", md: "16px" }}
          fontWeight={400}
        >
          Your current sales summary and activity.
        </Text>
      </Box>
      {/* <Flex justifyContent={{ base: "center", md: "flex-start" }}>
        <Flex
          padding={"6px"}
          paddingX={{ base: "8px", md: "10px" }}
          cursor={"pointer"}
          bg={"#FFF"}
          mr={{ base: "0", md: "10px" }}
          borderRadius={"8px"}
          onClick={handleViewToggle}
        >
          <Image src={graph} alt="Graph Icon" mr={{ base: "3px", md: "5px" }} />
          <Text as="p" fontSize={{ base: "12px", md: "14px" }}>
            {graphicalView ? "Table View" : "Graphical View"}
          </Text>
        </Flex>
      </Flex> */}
    </Flex>
  );
};

export default DashboardHeader;
