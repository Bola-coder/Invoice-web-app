/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SubscriptionContext = createContext();

export const useSubscriptionContext = () => {
  return useContext(SubscriptionContext);
};

const SubscriptionProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const toast = useToast({
    position: "top right",
    // variant: "subtle",
    duration: 3000,
    isClosable: true,
  });
  const { user } = useAuth();

  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSubscription(user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);

  const checkSubscription = async (email) => {
    setLoading(true);
    axios
      .post(
        `${apiUrl}/payment/check_status`,
        { email },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setIsSubscribed(true);
        } else {
          setIsSubscribed(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsSubscribed(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const initializePayment = async (data) => {
    setLoading(true);
    axios
      .post(`${apiUrl}/payment/initialize`, data, {
        withCredentials: true,
      })
      .then((res) => {
        const data = res.data.data;
        console.log(data);
        if (data.status === false) {
          toast({
            status: "error",
            description: "Failed to intialize payment transaction",
          });
        }
        const authorizationUrl = data.data.authorization_url;
        window.open(authorizationUrl, "_blank");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    isSubscribed,
    loading,
    checkSubscription,
    initializePayment,
  };
  return (
    <SubscriptionContext.Provider value={values}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionProvider;
