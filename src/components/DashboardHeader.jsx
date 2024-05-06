/* eslint-disable react/prop-types */
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import graph from "./../assets/icons/graph.png";
import trend from "./../assets/icons/trend.png";
const DashboardHeader = ({ user }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Box>
        <Text as={"h3"} fontSize={"20px"} fontWeight={600}>
          Hello, {user?.firstname}
        </Text>
        <Text as={"p"} fontSize={"14px"} fontWeight={400}>
          Your current sales summary and activity.
        </Text>
      </Box>
      <Flex>
        <Flex
          padding={"6px"}
          paddingX={"10px"}
          cursor={"pointer"}
          bg={"#FFF"}
          mr={"10px"}
          borderRadius={"8px"}
        >
          <Image src={graph} alt="Graph Icon" mr={"5px"} />
          <Text as="p">Graphical View</Text>
        </Flex>
        <Flex
          padding={"6px"}
          paddingX={"10px"}
          cursor={"pointer"}
          bg={"#FFF"}
          mr={"10px"}
          borderRadius={"8px"}
        >
          <Image src={trend} alt="Trend Icon" mr={"5px"} />
          <Text as="p">Trends</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
