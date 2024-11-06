/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, // Import for responsive behavior
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

const PaymentStatChart = ({ data }) => {
  return (
    <Box
      mt={"2%"}
      width={{ base: "100%", md: "75%", lg: "50%" }} // Responsive width
      maxWidth={"100%"} // Max width to prevent overflow
    >
      <Text as={"h2"} fontSize={{ base: "16px", md: "20px" }} fontWeight={500}>
        Payment Stats (30 days)
      </Text>
      <Text
        as={"p"}
        fontSize={{ base: "12px", md: "14px" }}
        fontWeight={500}
        color={"text.coral"}
      >
        Visualize your money in and out
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        {" "}
        {/* Makes chart responsive */}
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalPaid"
            stackId="a"
            fill="#82ca9d"
            name="Total Amount Received"
          />
          <Bar
            dataKey="total"
            stackId="b"
            fill="#ff8042"
            name="Total Invoice Amount Generated"
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PaymentStatChart;
