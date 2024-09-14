import { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useInvoiceContext } from "../contexts/InvoiceContext";
// import invoices from "../data/invoices";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import InvoiceList from "../components/InvoiceList";
import Layout from "../components/Layout";
import RecentTransactions from "../components/RecentTransactions";
import PaymentStatChart from "../components/PaymentChart";
const Dashboard = () => {
  const { user } = useAuth();
  const {
    invoices,
    invoiceStats,
    paymentStats,
    getAllInvoices,
    getInvoiceStats,
    getPaymentStats,
  } = useInvoiceContext();
  const [graphicalView, setGrahpcialView] = useState(false);

  const handleViewToggle = () => {
    setGrahpcialView(!graphicalView);
  };

  useEffect(() => {
    const getInvoices = async () => {
      await getAllInvoices();
      await getInvoiceStats(30);
      await getPaymentStats(60);
    };

    getInvoices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const recentInvoice = invoices.slice(0, 10);

  // if (!Object.keys(invoiceStats).length) return null;

  return (
    <Box fontFamily={"IBM Plex Sans"} bg={"#E7ECF0"}>
      <Layout>
        <Box padding={"3%"}>
          <DashboardHeader
            user={user}
            handleViewToggle={handleViewToggle}
            graphicalView={graphicalView}
          />
          {graphicalView ? (
            <PaymentStatChart data={paymentStats} />
          ) : (
            <Box>
              <DashboardStats invoiceStats={invoiceStats} />
              <PaymentStatChart data={paymentStats} />
            </Box>
          )}
          <Flex justifyContent={"space-between"} alignItems={"flex-start"}>
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
