/* eslint-disable react/prop-types */
import { Flex, Box, Text } from "@chakra-ui/react";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import StatCard from "./StatCard";
const DashboardStats = ({ invoiceStats }) => {
  return (
    <Box mt={"20px"}>
      <Flex justifyContent={"space-between"}>
        <Box flexBasis={"22%"}>
          <StatCard
            value={
              invoiceStats?.totalInvoices ? invoiceStats?.totalInvoices : 0
            }
            text={"Invoices (Past 30 days)"}
          />
        </Box>
        <Box flexBasis={"22%"}>
          <StatCard
            value={
              invoiceStats?.totalAmount
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.totalAmount
                  )}`
                : 0
            }
            text={"Amount (Past 30 days)"}
          />
        </Box>
        <Box flexBasis={"22%"}>
          <StatCard
            value={
              invoiceStats?.totalAmountRecieved
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.totalAmountRecieved
                  )}`
                : 0
            }
            text={"Payment (In)"}
          />
        </Box>
        <Box flexBasis={"22%"}>
          <StatCard
            value={
              invoiceStats?.balanceDue
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.balanceDue
                  )}`
                : 0
            }
            text={"Balance (Out)"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardStats;
