/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PaymentStatChart = ({ data }) => {
  return (
    <Box mt={"2%"} width={"50%"} maxWidth={"50%"}>
      <Text as={"h2"} fontSize={"20px"} fontWeight={500}>
        Payment Stats (30 days)
      </Text>
      <Text as={"p"} fontSize={"14px"} fontWeight={500} color={"text.coral"}>
        Visualize your money in and out
      </Text>
      <BarChart
        width={500}
        height={300}
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
          name="Total Amount Recieved"
        />
        <Bar
          dataKey="total"
          stackId="b"
          fill="#ff8042"
          name="Total invoice amount generated"
        />
      </BarChart>
    </Box>
  );
};

export default PaymentStatChart;
