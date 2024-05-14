/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
// import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
const StatCard = ({ value, text }) => {
  return (
    <Box bg={"#FFF"} padding={"20px"} borderRadius={"12px"}>
      {/* {statusType == "percentage" ? (
        <Flex
          w={"45px"}
          height={"20px"}
          borderRadius={"16px"}
          padding={"2px"}
          bg={increament ? "primary.300" : "red.500"}
          mb={"10px"}
        >
          {increament ? (
            <IoMdArrowUp color="#FFF" size={14} />
          ) : (
            <IoMdArrowDown color="#FFF" size={14} />
          )}
          <Text as={"span"} fontSize={"10px"} color={"#fff"}>
            {" "}
            {value}
          </Text>
        </Flex>
      ) : (
        <Box
          w={"auto"}
          //   height={"20px"}
          padding={"2px"}
          mb={"10px"}
        >
          <Text
            as={"span"}
            fontSize={"10px"}
            color={"#fff"}
            bg={"text.coral"}
            padding={"8px"}
            borderRadius={"16px"}
          >
            {value} New
          </Text>
        </Box>
      )} */}
      <Text
        fontSize={"14px"}
        fontWeight={500}
        color={"text.charcoal"}
        mb={"5px"}
      >
        {text}
      </Text>
      <Text fontSize={"20px"} color={"text.coral"}>
        {value}
      </Text>
    </Box>
  );
};

export default StatCard;
