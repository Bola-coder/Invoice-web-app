import { Box, Flex, Text } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";

const RecentTransactions = () => {
  return (
    <Box mt={"8%"} bg={"#FFF"} padding={"20px"} borderRadius={"12px"}>
      <Box>
        <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
          Recent Transactions
        </Text>
        <Text as={"p"} fontSize={"14px"} fontWeight={500} color={"text.coral"}>
          Your last 5 transactions
        </Text>
      </Box>
      <Box pt={"3%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          mb={"10px"}
          padding={"10px 0"}
        >
          <Box flexBasis={"50%"}>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box flexBasis={"40%"}>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          mb={"10px"}
          padding={"10px 0"}
        >
          <Box flexBasis={"50%"}>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box flexBasis={"40%"}>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          mb={"10px"}
          padding={"10px 0"}
        >
          <Box flexBasis={"50%"}>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box flexBasis={"40%"}>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          mb={"10px"}
          padding={"10px 0"}
        >
          <Box flexBasis={"50%"}>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box flexBasis={"40%"}>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Flex>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid gray"}
          mb={"10px"}
          padding={"10px 0"}
        >
          <Box flexBasis={"50%"}>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box flexBasis={"40%"}>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecentTransactions;
