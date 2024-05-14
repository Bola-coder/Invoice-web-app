/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import StatCard from "./StatCard";
const DashboardStats = ({ invoiceStats }) => {
  return (
    <Flex justifyContent={"space-between"} mt={"20px"}>
      <Box flexBasis={"22%"}>
        <StatCard
          value={invoiceStats?.totalInvoices}
          text={"Invoices (Past 7 days)"}
        />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard
          value={`NGN ${convertNumberToCurrencyFormat(
            invoiceStats?.totalAmount
          )}`}
          text={"Amount (Past 7 days)"}
        />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard
          value={`NGN ${convertNumberToCurrencyFormat(
            invoiceStats?.totalAmountRecieved
          )}`}
          text={"Payment (In)"}
        />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard
          value={`NGN ${convertNumberToCurrencyFormat(
            invoiceStats?.balanceDue
          )}`}
          text={"Balance (Out)"}
        />
      </Box>
    </Flex>
  );
};

export default DashboardStats;
