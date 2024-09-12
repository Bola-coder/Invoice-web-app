/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
const InvoicePaymentContext = createContext();

export const useInvoicePaymentContext = () => {
  return useContext(InvoicePaymentContext);
};

const InvoicePaymentProvider = ({ children }) => {
  const toast = useToast({
    position: "top right",
  });
  const apiUrl = import.meta.env.VITE_API_URL;
  const [invoicePayments, setInvoicePayments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInvoicePayments = async (invoiceId) => {
    setLoading(true);
    axios
      .get(`${apiUrl}/invoicePayment/${invoiceId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setInvoicePayments(res.data.data.invoicePayments[0]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createNewPayment = async (data) => {
    setLoading(true);
    axios
      .post(`${apiUrl}/invoicePayment`, data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(async (res) => {
        console.log(res.data);
        const payment = res.data.data.payment;
        await getInvoicePayments(payment.invoiceId);
        toast({
          title: "Payment added successfully",
          status: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Failed to add payment",
          status: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendPaymentReceipt = async (invoiceId) => {
    console.log(invoiceId);
    setLoading(true);
    axios
      .get(`${apiUrl}/invoicePayment/${invoiceId}/receipt`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        toast({
          title: "Receipt sent successfully",
          status: "success",
          message: res.data.message,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const values = {
    invoicePayments,
    loading,
    getInvoicePayments,
    createNewPayment,
    sendPaymentReceipt,
  };
  return (
    <InvoicePaymentContext.Provider value={values}>
      {children}
    </InvoicePaymentContext.Provider>
  );
};

export default InvoicePaymentProvider;
