import { useSubscriptionContext } from "../contexts/Subscription";
import { useAuth } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";
import NotSubscribed from "./NotSubscribed";
import { Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import Layout from "./Layout";

const SubscriptionRoutes = () => {
  const { onClose } = useDisclosure();
  const { user } = useAuth();
  const { isSubscribed, loading, initializePayment, checkSubscription } =
    useSubscriptionContext();

  useEffect(() => {
    checkSubscription(user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (loading) {
    // Optionally render a loading spinner or message while loading
    return (
      <Layout>
        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
          <Spinner size="xl" color="primary" />
        </Flex>
      </Layout>
    );
  }

  if (!isSubscribed) {
    return (
      <NotSubscribed
        isOpen={true}
        onClose={onClose}
        initializePayment={initializePayment}
      />
    );
  }

  return <Outlet />;
};

export default SubscriptionRoutes;
