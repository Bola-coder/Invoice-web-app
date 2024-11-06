/* eslint-disable react/prop-types */
import { Box, Text, Flex } from "@chakra-ui/react";

const StatCard = ({ value, text, icon: Icon }) => {
  return (
    <Box
      bg={"#FFF"}
      padding={{ base: "8px", md: "20px" }} // Adjust padding based on screen size
      borderRadius={"12px"}
      boxShadow="md"
      height={{ base: "auto", md: "120px" }} // Adjust height based on screen size
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex alignItems="center" mb={{ base: "5px", md: "10px" }}>
        {Icon && (
          <Icon size={24} color="#074D41" style={{ marginRight: "10px" }} />
        )}
        <Text
          fontSize={{ base: "12px", sm: "14px" }} // Responsive font size
          fontWeight={500}
          color={"text.charcoal"}
        >
          {text}
        </Text>
      </Flex>
      <Text fontSize={{ base: "12px", sm: "16px" }} color={"text.coral"}>
        {value}
      </Text>
    </Box>
  );
};

export default StatCard;
