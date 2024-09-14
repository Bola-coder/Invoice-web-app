import { Box, Text } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";

const RecentTransactions = () => {
  return (
    <Box mt={"8%"}>
      <Box padding={"10px"} mb={2}>
        <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
          Recent Transactions
        </Text>
        <Text as={"p"} fontSize={"14px"} fontWeight={500} color={"text.coral"}>
          Your last 5 transactions
        </Text>
      </Box>
      <Box
        bg={"#FFF"}
        margin={"auto"}
        border={"1px solid #e0e0e0"}
        borderRadius={"12px"}
      >
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          padding={"20px"}
        >
          <Box>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          padding={"20px"}
        >
          <Box>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          padding={"20px"}
        >
          <Box>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          alignItems="center"
          borderBottom={"1px solid #efeded"}
          padding={"20px"}
        >
          <Box>
            <Text fontSize={"12px"}>Ajanaku Enterprise</Text>
            <Text fontSize={"12px"}>
              NGN {convertNumberToCurrencyFormat(234000)}
            </Text>
          </Box>
          <Box>
            <Text fontSize={"12px"}>Wednessday, 12th May, 2021 12:00 PM</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentTransactions;
