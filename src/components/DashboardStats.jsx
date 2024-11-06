/* eslint-disable react/prop-types */
import { Flex, Box } from "@chakra-ui/react";
import {
  FaFileInvoice,
  FaDollarSign,
  FaMoneyBillWave,
  FaBalanceScale,
} from "react-icons/fa";
import { convertNumberToCurrencyFormat } from "../utils/formatNumber";
import StatCard from "./StatCard";

const DashboardStats = ({ invoiceStats }) => {
  return (
    <Box mt={"20px"}>
      <Flex
        justifyContent={"space-between"}
        flexWrap={"wrap"} // Enables wrapping on smaller screens
      >
        <Box
          flexBasis={{ base: "100%", sm: "48%", md: "22%" }}
          mb={{ base: "10px", md: "0" }}
        >
          <StatCard
            icon={FaFileInvoice}
            value={
              invoiceStats?.totalInvoices ? invoiceStats?.totalInvoices : 0
            }
            text={"Invoices (30 days)"}
          />
        </Box>
        <Box
          flexBasis={{ base: "100%", sm: "48%", md: "22%" }}
          mb={{ base: "10px", md: "0" }}
        >
          <StatCard
            icon={FaDollarSign}
            value={
              invoiceStats?.totalAmount
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.totalAmount
                  )}`
                : `NGN ${0}`
            }
            text={"Amount (30 days)"}
          />
        </Box>
        <Box
          flexBasis={{ base: "100%", sm: "48%", md: "22%" }}
          mb={{ base: "10px", md: "0" }}
        >
          <StatCard
            icon={FaMoneyBillWave}
            value={
              invoiceStats?.totalAmountRecieved
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.totalAmountRecieved
                  )}`
                : `NGN ${0}`
            }
            text={"Payment (In)"}
          />
        </Box>
        <Box flexBasis={{ base: "100%", sm: "48%", md: "22%" }}>
          <StatCard
            icon={FaBalanceScale}
            value={
              invoiceStats?.balanceDue
                ? `NGN ${convertNumberToCurrencyFormat(
                    invoiceStats?.balanceDue
                  )}`
                : `NGN ${0}`
            }
            text={"Balance (Out)"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default DashboardStats;
