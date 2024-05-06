import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useInvoiceContext } from "../contexts/InvoiceContext";
// import invoices from "../data/invoices";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import InvoiceList from "../components/InvoiceList";
import Layout from "../components/Layout";
import RecentTransactions from "../components/RecentTransactions";
const Dashboard = () => {
  const { user } = useAuth();
  const { invoices, getAllInvoices } = useInvoiceContext();

  useEffect(() => {
    const getInvoices = async () => {
      await getAllInvoices();
    };

    getInvoices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  const recentInvoice = invoices.slice(0, 5);
  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          <DashboardHeader user={user} />
          <DashboardStats />
          <Flex justifyContent={"space-between"}>
            <Box width={"60%"}>
              <InvoiceList displayTitle={true} invoices={recentInvoice} />
            </Box>
            <Box width={"35%"}>
              <RecentTransactions />
            </Box>
          </Flex>
        </Box>
      </Layout>
    </Box>
  );
};

export default Dashboard;
