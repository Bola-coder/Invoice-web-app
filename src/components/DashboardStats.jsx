import { Flex, Box } from "@chakra-ui/react";
import StatCard from "./StatCard";
const DashboardStats = () => {
  return (
    <Flex justifyContent={"space-between"} mt={"20px"}>
      <Box flexBasis={"22%"}>
        <StatCard statusType={"percentage"} increament={true} value={"10%"} />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard statusType={"percentage"} value={"5%"} />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard value={6} />
      </Box>
      <Box flexBasis={"22%"}>
        <StatCard value={12} />
      </Box>
    </Flex>
  );
};

export default DashboardStats;
