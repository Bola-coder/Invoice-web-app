import { useSubscriptionContext } from "../contexts/Subscription";
import { Outlet } from "react-router-dom";
import NotSubscribed from "./NotSubscribed";
import { useDisclosure } from "@chakra-ui/react";

const SubscriptionRoutes = () => {
  const { onClose } = useDisclosure();
  const { isSubscribed, loading, initializePayment } = useSubscriptionContext();

  if (loading) {
    // Optionally render a loading spinner or message while loading
    return <div>Loading...</div>;
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
