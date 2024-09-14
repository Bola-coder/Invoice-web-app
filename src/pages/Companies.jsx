import { useEffect } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import { useSubscriptionContext } from "../contexts/Subscription";
import Layout from "../components/Layout";
import NotSubscribed from "../components/NotSubscribed";
const Companies = () => {
  const { user } = useAuth();
  const { isSubscribed, checkSubscription, initializePayment } =
    useSubscriptionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    checkSubscription(user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  useEffect(() => {
    if (!isSubscribed) {
      onOpen();
    } else {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubscribed]);

  return (
    <Layout>
      <Box minHeight={"100vh"} fontFamily={"IBM Plex Sans"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <NotSubscribed
            isOpen={isOpen}
            onClose={onClose}
            initializePayment={initializePayment}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Companies;
