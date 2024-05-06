/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const InvoiceContext = createContext();

export const useInvoiceContext = () => {
  return useContext(InvoiceContext);
};

const InvoiceProvider = ({ children }) => {
  const toast = useToast({
    position: "top right",
    // variant: "subtle",
    duration: 3000,
    isClosable: true,
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllInvoices = async () => {
    setLoading(true);
    axios
      .get(`${apiUrl}/invoices`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setInvoices(res.data.data.invoices);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createInvoice = async (invoice) => {
    setLoading(true);
    axios
      .post(`${apiUrl}/invoices`, invoice, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        getAllInvoices();
        setLoading(false);
        toast({
          title: "Invoice created.",
          description: "Invoice has been created successfully.",
          status: "success",
        });
        navigate("/invoice");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const values = {
    invoices,
    setInvoices,
    loading,
    getAllInvoices,
    createInvoice,
  };
  return (
    <InvoiceContext.Provider value={values}>{children}</InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
