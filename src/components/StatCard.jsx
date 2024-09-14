/* eslint-disable react/prop-types */
import { Box, Text, Flex } from "@chakra-ui/react";

const StatCard = ({ value, text, icon: Icon }) => {
  return (
    <Box bg={"#FFF"} padding={"20px"} borderRadius={"12px"} boxShadow="md">
      <Flex alignItems="center" mb={"10px"}>
        {Icon && (
          <Icon size={24} color="#074D41" style={{ marginRight: "10px" }} />
        )}{" "}
        <Text fontSize={"14px"} fontWeight={500} color={"text.charcoal"}>
          {text}
        </Text>
      </Flex>
      <Text fontSize={"20px"} color={"text.coral"}>
        {value}
      </Text>
    </Box>
  );
};

export default StatCard;
